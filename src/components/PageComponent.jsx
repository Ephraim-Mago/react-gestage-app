import { useEffect, useState } from "react";

export default function PageComponent({ title, children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (loader) {
        setLoader(false);
      }
    }, 500);
  }, []);

  return (
    <>
      {/* loader */}
      {loader && (
        <div id="ftco-loader" className="fullscreen show">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="4"
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="4"
              strokeMiterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div>
      )}

      {!loader && (
        <div className="container-fluid px-4">
          <h1 className="mt-4 mb-4">{title}</h1>
          {children}
        </div>
      )}
    </>
  );
}
