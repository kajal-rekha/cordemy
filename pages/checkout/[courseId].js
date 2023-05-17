import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Checkout = ({ course }) => {
  const { data: session } = useSession();

  const handleCheckout = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  return (
    <div className=" wrapper py-10 min-h-screen">
      <SectionHeader
        span={"Checkout"}
        h2={"Personalize Your Order by Sharing Your Details!"}
        p={"Unlock Exclusive Benefits: Complete the Checkout Form Now!"}
      />

      <div className="flex justify-center">
        <form
          onSubmit={handleCheckout}
          className="flex flex-col gap-5 mt-10 w-full lg:w-[35rem]"
        >
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="name" className="cursor-pointer">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Sarah"
              value={formData.name}
              readOnly
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@gmail.com"
              value={formData.email}
              readOnly
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="mobile" className="cursor-pointer">
              Phone number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="+88016xxxxxxxx"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              required
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="address" className="cursor-pointer">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="ABC.... "
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="address" className="cursor-pointer">
              Course title
            </label>
            <input
              type="text"
              id="courseTitle"
              placeholder="Mastering Graphic Design"
              value={formData.courseTitle}
              readOnly
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="address" className="cursor-pointer">
              Price (USD)
            </label>
            <input
              type="number"
              id="price"
              placeholder="$100"
              value={formData.price}
              readOnly
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            />
          </div>

          <button
            role="link"
            type="submit"
            className="bg-black py-4 rounded-lg text-white uppercase hover:bg-gray-700 duration-300"
          >
            Proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourses = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourses,
    },
  };
};
