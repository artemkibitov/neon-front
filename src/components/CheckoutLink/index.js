import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useCreateUserHash from "@/components/hooks/useCreateUserHash";

const CheckoutLink = ({ href, callback, children, OrderModel }) => {
  const router = useRouter();
  const { response } = useCreateUserHash();

  const handleClick = async (e) => {
    e.preventDefault();

    const hash = await response;
    console.log(hash);
    if (hash && !OrderModel.hash) OrderModel.setHash(hash);

    if (callback) await callback(hash);

    router.push(href);
  }

  return (
    <Link href={href} passHref>
      <p onClick={handleClick}>{children}</p>
    </Link>
  )
};

export default CheckoutLink;
