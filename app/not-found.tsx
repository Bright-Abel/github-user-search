'use client';
import Error from '@/components/Error';

const NotFoundPage = () => {
  return (
    <Error
      errorTitle={'Page Not Found'}
      subTitle={"Sorry, we couldn’t find the page you’re looking for"}
      imageLink={'/assets/svgs/error.svg'}
      link={true}
    />
  );
};

export default NotFoundPage;
