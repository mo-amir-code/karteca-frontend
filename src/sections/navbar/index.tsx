"use client";
import { mobileNavbar } from "@/data";
import { HiHome, HiBell } from "react-icons/hi";
import { HiWallet, HiUserCircle } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { memo, useCallback, useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectDesktop,
  setMobileProfileMenu,
  setProfile,
} from "@/redux/slices/app/appSlice";
import {
  selectIsUserLoggedIn,
  selectLoggedInUserId,
  selectLoggedInUserName,
} from "@/redux/slices/auth/authSlice";
import { selectUserCartItems } from "@/redux/slices/user/userSlice";
import { useGetUserNotificationsQuery } from "@/redux/queries/notification/notificationAPI";

const MobileNavbar = () => {
  const [selected, setSelected] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const loggedInUserName = useAppSelector(selectLoggedInUserName);
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const cartItems = useAppSelector(selectUserCartItems);
  const { profile } = useAppSelector(selectDesktop);
  const { data } = useGetUserNotificationsQuery(loggedInUserId!);

  const handleMobileNavbar = useCallback(
    ({ target, path }: { target: string; path: string }) => {
      if (isUserLoggedIn) {
        if (target === "home" || target === "cart" || target === "profile") {
          dispatch(setProfile({ profile: "profile" }));
          dispatch(setMobileProfileMenu({ isProfileMenuOpen: true }));
          router.push(path);
          return;
        }
        dispatch(setProfile({ profile: target }));
        dispatch(setMobileProfileMenu({ isProfileMenuOpen: false }));
        router.push(path);
      } else {
        router.push("/auth/signin");
      }
    },
    [selected, isUserLoggedIn, dispatch, profile]
  );

  useLayoutEffect(() => {
    if (pathname === "/") setSelected(0);
    if (pathname === "/user/cart") setSelected(4);
    else if (pathname.startsWith("/user/")) {
      switch (profile) {
        case "profile":
          setSelected(3);
          break;
        case "notification":
          setSelected(1);
          break;
        case "dashboard":
          setSelected(2);
          break;
        default:
          setSelected(3);
      }
    }
  }, [pathname, profile]);

  return (
    <nav
      className={`fixed md:hidden bottom-0 left-0 w-full z-30 p-4 border-t border-secondary-color bg-white ${
        pathname === "/search" && "hidden"
      }`}
    >
      <ul className="flex items-center justify-between">
        {mobileNavbar.map((nav, idx) => (
          <li
            onClick={() => setSelected(idx)}
            key={nav.name}
            className={`cursor-pointer ${
              selected === idx ? "text-primary-color" : ""
            } smooth_transition relative`}
          >
            {(() => {
              switch (nav.name) {
                case "Home":
                  return (
                    <HiHome
                      onClick={() =>
                        handleMobileNavbar({ target: "home", path: nav.path })
                      }
                      size={24}
                    />
                  );
                case "Notifications":
                  return (
                    <>
                      <HiBell
                        onClick={() =>
                          handleMobileNavbar({
                            target: "notification",
                            path: nav.path,
                          })
                        }
                        size={24}
                      />
                      {data?.data?.notificationCount > 0 ? (
                        <span className="absolute -top-[40%] text-white w-4 h-4 flex items-center justify-center -right-1/3 text-[10px] p-1 rounded-full bg-primary-color font-semibold">
                          {data?.data?.notificationCount}
                        </span>
                      ) : null}
                    </>
                  );
                case "Wallet":
                  return (
                    <HiWallet
                      onClick={() =>
                        handleMobileNavbar({
                          target: "dashboard",
                          path: `${nav.path}${loggedInUserName}`,
                        })
                      }
                      size={24}
                    />
                  );
                case "User":
                  return (
                    <HiUserCircle
                      onClick={() =>
                        handleMobileNavbar({
                          target: "profile",
                          path: `${nav.path}${loggedInUserName
                            ?.replace(" ", "")
                            .toLowerCase()}`,
                        })
                      }
                      size={24}
                    />
                  );
                case "Cart":
                  return (
                    <>
                      <FaCartShopping
                        onClick={() =>
                          handleMobileNavbar({ target: "cart", path: nav.path })
                        }
                        size={24}
                      />
                      {cartItems?.length ? (
                        <span className="absolute -top-[40%] text-white w-4 h-4 flex items-center justify-center -right-1/3 text-[10px] p-1 rounded-full bg-primary-color font-semibold">
                          {cartItems?.length}
                        </span>
                      ) : null}
                    </>
                  );
                default:
                  return;
              }
            })()}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(MobileNavbar);
