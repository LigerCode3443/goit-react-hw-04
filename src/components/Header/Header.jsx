import { useForm } from "react-hook-form";
export const Header = ({ setQuery }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setQuery(data.query);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" {...register("query")} />
      <button>Search</button>
    </form>
  );
};
