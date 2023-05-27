import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import usePostApi from "@/components/hooks/usePostApi";

const CheckoutLink = ({ href, callback, children, OrderModel }) => {
  const router = useRouter();
  const postApi = usePostApi();

  const handleClick = async (e) => {
    e.preventDefault();
    postApi.postData('/users/hash', { data: null });
  }

  useEffect(() => {
    if (postApi.response) {
      const hash = postApi.response;

      if (hash && !OrderModel.getHash().length) {
        const setHashAndRedirect = async () => {
          await OrderModel.setHash(hash);
          if (callback) callback(hash, router, href).then(() => router.push(href));
        }

        setHashAndRedirect();
      }
    }
  }, [postApi.response]);

  return (
    <Link href={href} passHref>
      {
        postApi.isLoading ?
          <div className='spinner mx-auto'></div> :
          <p onClick={handleClick}>{children}</p>
      }
    </Link>
  )
};

export default CheckoutLink;
