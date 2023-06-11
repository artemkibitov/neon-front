import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Link from "next/link";
import usePostApi from "@/components/hooks/usePostApi";
import EditorContext from '../Editor/editorContext';

const CheckoutLink = ({ href, callback, children, OrderModel }) => {
  const { state } = useContext(EditorContext);
  const router = useRouter();
  const postApi = usePostApi();

  const handleClick = async (e) => {
    e.preventDefault();
    postApi.postData('/users/hash', { data: null });
  }

  useEffect(() => {
    if (postApi.response) {
      const hash = postApi.response;

      if (hash && !state.OrderModel.getHash().length) {
        const setHashAndRedirect = async () => {
          await state.OrderModel.setHash(hash);
          if (callback) callback(hash, router, href).then(() => router.push(href));
          else router.push(href);
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
          <div onClick={handleClick}>{children}</div>
      }
    </Link>
  )
};

export default CheckoutLink;
