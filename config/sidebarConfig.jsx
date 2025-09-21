import DefaultIcon from "../src/assets/svgs/default";
import ECommerce from "../src/assets/svgs/eCommerce";
import Projects from "../src/assets/svgs/projects";
import OnlineCourses from "../src/assets/svgs/onlineCourses";
import UserProfile from "../src/assets/svgs/userProfile";
import Account from "../src/assets/svgs/account";
import Corporate from "../src/assets/svgs/corporate";
import Blog from "../src/assets/svgs/blog";
import Social from "../src/assets/svgs/social";
const sidebarConfig = [
  {
    header: "Dashboards",
    items: [
      { title: "Default", icon: <DefaultIcon />, path: "/dashboard" },
      { title: "eCommerce", icon: <ECommerce />, path: "/ecommerce" },
      { title: "Projects", icon: <Projects />, path: "/projects" },
      { title: "Online Courses", icon: <OnlineCourses />, path: "/courses" },
    ],
  },
  {
    header: "Pages",
    items: [
      {
        title: "User Profile",
        icon: <UserProfile />,
        expandable: true,
        children: [
          { title: "Overview", path: "/profile/overview" },
          { title: "Projects", path: "/profile/projects" },
          { title: "Campaigns", path: "/profile/campaigns" },
          { title: "Documents", path: "/profile/documents" },
          { title: "Followers", path: "/profile/followers" },
        ],
      },
      {
        title: "Account",
        icon: <Account />,
        path: "/account",
      },
      {
        title: "Corporate",
        icon: <Corporate />,
        path: "/corporate",
      },
      {
        title: "Blog",
        icon: <Blog />,
        path: "/blog",
      },
      {
        title: "Social",
        icon: <Social />,
        path: "/social",
      },
    ],
  },
];

export default sidebarConfig;