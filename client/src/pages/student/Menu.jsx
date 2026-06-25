import { useEffect, useState } from "react";
import API from "../../api/axios";
import SkeletonLoader from "../../components/SkeletonLoader";

function Menu() {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const { data } = await API.get(
        "/menu/today"
      );

      setMenu(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Today's Menu 🍽️
      </h1>

      {loading ? (
        <SkeletonLoader type="menu" count={3} />
      ) : (
        <div className="grid md:grid-cols-3 gap-5">
          <div className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
border
border-slate-200
dark:border-slate-800
shadow-lg
hover:shadow-xl
transition-all
duration-300
">
            <h2
  className="
  font-bold
  mb-2
  text-slate-900
  dark:text-white
"
>
              Breakfast
            </h2>

            <p
  className="
  mt-4
  text-lg
  font-medium
  text-slate-700
  dark:text-slate-300
"
>
  {menu?.breakfast}
</p>
          </div>

          <div className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
border
border-slate-200
dark:border-slate-800
shadow-lg
hover:shadow-xl
transition-all
duration-300
">
            <h2
  className="
  font-bold
  mb-2
  text-slate-900
  dark:text-white
"
>
              Lunch
            </h2>

            <p
  className="
  mt-4
  text-lg
  font-medium
  text-slate-700
  dark:text-slate-300
"
>
              {menu?.lunch ||
                "No Menu"}
            </p>
          </div>

          <div className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
border
border-slate-200
dark:border-slate-800
shadow-lg
hover:shadow-xl
transition-all
duration-300
">
            <h2
  className="
  font-bold
  mb-2
  text-slate-900
  dark:text-white
"
>
              Dinner
            </h2>

            <p
  className="
  mt-4
  text-lg
  font-medium
  text-slate-700
  dark:text-slate-300
"
>
              {menu?.dinner ||
                "No Menu"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;