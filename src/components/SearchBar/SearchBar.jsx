import { useForm } from "react-hook-form";
import s from "./SearchBar.module.css";

export const SearchBar = ({ setQuery }) => {
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = (data) => {
    setQuery(data.query);
    reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input
          type="search"
          {...register("query")}
          placeholder="Search..."
          className={s.input}
        />
        <button className="btn">Search</button>
      </form>
    </header>
  );
};
