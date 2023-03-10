import { useStateContext } from "../../contexts/ContextProvider";

export default function Toast() {
  const { toast } = useStateContext();

  return (
    <>
      {toast.show && (
        <div className="position-fixed bottom-0 end-0 bg-success text-white px-2 m-3 rounded-3">
          <p className="my-1">{toast.message}</p>
        </div>
      )}
    </>
  );
}
