import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function withAuth(vfy: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const token = req.cookies.accessToken;

    if (!token) {
      // Redirect to login page
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      };
    }
    // if token exits it loads the original context of the component
    return await vfy(context);
  };
}

//wrap this function below the page component that you want protected