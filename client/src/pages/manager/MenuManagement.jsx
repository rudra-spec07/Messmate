import { useEffect, useState } from "react";
import API from "../../api/axios";
import SkeletonLoader from "../../components/SkeletonLoader";

function ManagerMenu() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    date: "",
    breakfast: "",
    lunch: "",
    dinner: "",
  });

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    setLoading(true);
    try {
      const { data } =
        await API.get("/menu");

      setMenus(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createMenu = async () => {
    try {
      await API.post(
        "/menu",
        form
      );

      setForm({
        date: "",
        breakfast: "",
        lunch: "",
        dinner: "",
      });

      fetchMenus();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMenu = async (id) => {
    try {
      await API.delete(
        `/menu/${id}`
      );

      fetchMenus();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1
        className="
        text-3xl
        font-bold
        mb-6
        dark:text-white
      "
      >
        Manage Menu 🍽️
      </h1>

      <div
        className="
        bg-white
        dark:bg-slate-900
        p-6
        rounded-2xl
        shadow-lg
        mb-8
      "
      >
        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({
                ...form,
                date: e.target.value,
              })
            }
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            placeholder="Breakfast"
            value={form.breakfast}
            onChange={(e) =>
              setForm({
                ...form,
                breakfast:
                  e.target.value,
              })
            }
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            placeholder="Lunch"
            value={form.lunch}
            onChange={(e) =>
              setForm({
                ...form,
                lunch:
                  e.target.value,
              })
            }
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            placeholder="Dinner"
            value={form.dinner}
            onChange={(e) =>
              setForm({
                ...form,
                dinner:
                  e.target.value,
              })
            }
            className="border p-3 rounded-xl"
          />

        </div>

        <button
          onClick={createMenu}
          className="
          mt-4
          bg-orange-500
          text-white
          px-6
          py-3
          rounded-xl
        "
        >
          Create Menu
        </button>
      </div>

      {loading ? (
        <SkeletonLoader count={3} />
      ) : (
        <div className="space-y-4">
          {menus.map((menu) => (
            <div
              key={menu._id}
              className="
              bg-white
              dark:bg-slate-900
              p-5
              rounded-2xl
              shadow-lg
            "
            >
              <p>
                📅 {menu.date}
              </p>

              <p>
                🍳 Breakfast:
                {" "}
                {menu.breakfast}
              </p>

              <p>
                🍛 Lunch:
                {" "}
                {menu.lunch}
              </p>

              <p>
                🌙 Dinner:
                {" "}
                {menu.dinner}
              </p>

              <button
                onClick={() =>
                  deleteMenu(menu._id)
                }
                className="
                mt-3
                bg-red-500
                text-white
                px-4
                py-2
                rounded-lg
              "
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManagerMenu;