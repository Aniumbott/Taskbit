// Import Modules
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { Button } from "@mantine/core";
import { doc, setDoc } from "firebase/firestore";

// Import Components
import base from "../pages/firebase";
import CreateTodo from "./CreateTodo.page";
import Done from "./Done.page";
import Remaining from "./Remaining.page";

// Main Function
function TodoHome(props: any) {
  // States
  const { auth, db } = base;
  const { user, setUser } = props;
  const default_data = user.todoList;
  const [todoList, setTodoList] = useState(user.todoList);

  // Log Out Function
  function logOut() {
    signOut(auth);
  }

  // Update DB
  useEffect(() => {
    if (todoList != default_data) {
      let u = user;
      u.todoList = todoList;
      const updateUser = async (u: any) => {
        const update = await setDoc(doc(db, "users", u.id), u);
      };
      updateUser(u).then(() => {
        setUser(u);
      });
      console.log("updated");
    } else {
    }
  }, [todoList]);

  // Update local TodoList
  useEffect(() => {
    setTodoList(user.todoList);
  }, [user]);

  return (
    <div>
      {/* Logo Image */}
      <a href="https://taskbit.vercel.app">
        <svg
          width={(281 / 420) * 80}
          height="80"
          viewBox="0 0 281 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_201_2)">
            <path
              d="M10 10H271V333.187L140.5 408.456L10 333.187V10Z"
              fill="white"
              stroke="black"
              stroke-width="20"
            />
            <path
              d="M46.3785 159.227V148.091H90.6256V159.227H75.3131V199H61.691V159.227H46.3785ZM102.626 199H87.711L104.515 148.091H123.407L140.211 199H125.296L114.16 162.111H113.762L102.626 199ZM99.8417 178.915H127.881V189.256H99.8417V178.915ZM170.575 164C170.442 162.343 169.821 161.05 168.711 160.122C167.617 159.194 165.951 158.73 163.714 158.73C162.289 158.73 161.121 158.904 160.209 159.252C159.314 159.584 158.651 160.039 158.221 160.619C157.79 161.199 157.566 161.862 157.549 162.608C157.516 163.221 157.624 163.776 157.873 164.273C158.138 164.754 158.552 165.193 159.116 165.591C159.679 165.972 160.4 166.32 161.278 166.635C162.156 166.95 163.2 167.232 164.41 167.48L168.586 168.375C171.404 168.972 173.815 169.759 175.82 170.737C177.825 171.714 179.466 172.866 180.742 174.192C182.018 175.501 182.954 176.976 183.551 178.616C184.164 180.257 184.479 182.047 184.495 183.986C184.479 187.333 183.642 190.167 181.985 192.487C180.328 194.807 177.958 196.572 174.875 197.782C171.81 198.992 168.122 199.597 163.814 199.597C159.389 199.597 155.528 198.942 152.23 197.633C148.949 196.324 146.397 194.31 144.574 191.592C142.767 188.858 141.856 185.361 141.839 181.102H154.964C155.047 182.66 155.437 183.969 156.133 185.03C156.829 186.09 157.806 186.894 159.066 187.441C160.342 187.988 161.858 188.261 163.615 188.261C165.09 188.261 166.324 188.079 167.319 187.714C168.313 187.35 169.067 186.844 169.581 186.198C170.094 185.552 170.36 184.814 170.376 183.986C170.36 183.207 170.103 182.527 169.606 181.947C169.125 181.351 168.33 180.821 167.219 180.357C166.109 179.876 164.609 179.429 162.72 179.014L157.649 177.92C153.141 176.943 149.587 175.31 146.985 173.023C144.4 170.72 143.115 167.58 143.132 163.602C143.115 160.371 143.977 157.545 145.717 155.126C147.474 152.69 149.901 150.792 153 149.433C156.116 148.074 159.687 147.395 163.714 147.395C167.824 147.395 171.379 148.083 174.378 149.458C177.378 150.834 179.69 152.772 181.314 155.275C182.954 157.761 183.783 160.669 183.799 164H170.575ZM189.753 199V148.091H203.574V168.673H204.27L219.582 148.091H235.69L218.489 170.761L236.088 199H219.582L208.148 179.909L203.574 185.875V199H189.753ZM51.2739 299V215.364H87.5381C93.9089 215.364 99.2587 216.221 103.587 217.936C107.944 219.652 111.224 222.075 113.429 225.206C115.662 228.337 116.778 232.026 116.778 236.273C116.778 239.349 116.098 242.153 114.736 244.685C113.402 247.217 111.524 249.341 109.101 251.056C106.678 252.744 103.846 253.915 100.606 254.568V255.385C104.2 255.521 107.467 256.433 110.407 258.121C113.348 259.782 115.689 262.082 117.432 265.023C119.174 267.936 120.045 271.366 120.045 275.314C120.045 279.888 118.847 283.958 116.451 287.525C114.083 291.091 110.707 293.895 106.324 295.937C101.94 297.979 96.7131 299 90.6418 299H51.2739ZM73.9799 280.868H84.5978C88.4093 280.868 91.268 280.16 93.1738 278.744C95.0796 277.301 96.0325 275.178 96.0325 272.374C96.0325 270.413 95.5832 268.753 94.6848 267.391C93.7864 266.03 92.5068 264.996 90.846 264.288C89.2125 263.58 87.2387 263.226 84.9245 263.226H73.9799V280.868ZM73.9799 249.178H83.291C85.2784 249.178 87.0345 248.864 88.5591 248.238C90.0837 247.612 91.268 246.714 92.112 245.543C92.9832 244.345 93.4188 242.888 93.4188 241.173C93.4188 238.587 92.4932 236.613 90.6418 235.252C88.7905 233.863 86.4491 233.169 83.6177 233.169H73.9799V249.178ZM150.796 215.364V299H128.09V215.364H150.796ZM159.27 233.659V215.364H231.962V233.659H206.806V299H184.426V233.659H159.27Z"
              fill="black"
            />
            <path
              d="M93.5909 73.9091V103H90.1818L74.3295 80.1591H74.0455V103H70.5227V73.9091H73.9318L89.8409 96.8068H90.125V73.9091H93.5909ZM100.64 103V73.9091H118.197V77.0341H104.163V86.8636H117.288V89.9886H104.163V99.875H118.424V103H100.64ZM129.319 73.9091L135.185 83.8239H135.413L141.308 73.9091H148.254L139.376 88.4545L148.452 103H141.379L135.413 93.071H135.185L129.219 103H122.174L131.279 88.4545L122.344 73.9091H129.319ZM151.549 77.0341V73.9091H173.367V77.0341H164.219V103H160.697V77.0341H151.549ZM186.308 73.9091H189.83V94.7045C189.83 96.5606 189.489 98.1373 188.808 99.4347C188.126 100.732 187.165 101.717 185.924 102.389C184.683 103.062 183.22 103.398 181.535 103.398C179.944 103.398 178.528 103.109 177.288 102.531C176.047 101.944 175.072 101.111 174.362 100.031C173.651 98.9517 173.296 97.6686 173.296 96.1818H176.762C176.762 97.0057 176.966 97.7254 177.373 98.3409C177.79 98.947 178.358 99.4205 179.077 99.7614C179.797 100.102 180.616 100.273 181.535 100.273C182.548 100.273 183.41 100.06 184.12 99.6335C184.83 99.2074 185.37 98.5824 185.739 97.7585C186.118 96.9252 186.308 95.9072 186.308 94.7045V73.9091ZM212.799 81.1818C212.629 79.7424 211.937 78.625 210.725 77.8295C209.513 77.0341 208.026 76.6364 206.265 76.6364C204.977 76.6364 203.85 76.8447 202.884 77.2614C201.928 77.678 201.18 78.2509 200.64 78.9801C200.11 79.7093 199.844 80.5379 199.844 81.4659C199.844 82.2424 200.029 82.91 200.398 83.4688C200.777 84.018 201.26 84.4773 201.847 84.8466C202.434 85.2064 203.05 85.5047 203.694 85.7415C204.338 85.9687 204.93 86.1534 205.469 86.2955L208.424 87.0909C209.182 87.2898 210.024 87.5644 210.952 87.9148C211.89 88.2652 212.785 88.7434 213.637 89.3494C214.499 89.946 215.209 90.7131 215.768 91.6506C216.326 92.5881 216.606 93.7386 216.606 95.1023C216.606 96.6742 216.194 98.0947 215.37 99.3636C214.556 100.633 213.362 101.641 211.79 102.389C210.228 103.137 208.329 103.511 206.094 103.511C204.011 103.511 202.207 103.175 200.683 102.503C199.167 101.83 197.974 100.893 197.103 99.6903C196.241 98.4877 195.754 97.0909 195.64 95.5H199.276C199.371 96.5985 199.74 97.5076 200.384 98.2273C201.038 98.9375 201.862 99.4678 202.856 99.8182C203.86 100.159 204.939 100.33 206.094 100.33C207.439 100.33 208.647 100.112 209.717 99.6761C210.787 99.2311 211.634 98.6155 212.259 97.8295C212.884 97.0341 213.197 96.1061 213.197 95.0455C213.197 94.0795 212.927 93.2936 212.387 92.6875C211.847 92.0814 211.137 91.589 210.256 91.2102C209.376 90.8314 208.424 90.5 207.401 90.2159L203.822 89.1932C201.549 88.5398 199.75 87.607 198.424 86.3949C197.098 85.1828 196.435 83.5966 196.435 81.6364C196.435 80.0076 196.876 78.5871 197.756 77.375C198.647 76.1534 199.84 75.2064 201.336 74.5341C202.842 73.8523 204.522 73.5114 206.379 73.5114C208.254 73.5114 209.92 73.8475 211.379 74.5199C212.837 75.1828 213.992 76.0919 214.844 77.2472C215.706 78.4025 216.161 79.714 216.208 81.1818H212.799Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_201_2">
              <rect width="281" height="420" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
      {/* Todo Continers */}
      <div className="todos-container">
        <Remaining todoList={todoList} setTodoList={setTodoList} />
        <Done todoList={todoList} setTodoList={setTodoList} />
      </div>

      {/* Create a new todo */}
      <CreateTodo todoList={todoList} setTodoList={setTodoList} />

      {/* SignOut */}
      <Button color="red" onClick={logOut} className="log-out">
        Sign Out
      </Button>
      {/* Style */}
      <style>{`

            .todos-container {
                width: 80%;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: space-around;
            }

            .log-out {
              position: fixed;
              left: 0;
              bottom: 0;
              margin: 1rem;
            }
          `}</style>
    </div>
  );
}

export default TodoHome;
