import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// STRIPE PROMISE
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = ({ course }) => {
  const { data: session } = useSession();

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

  // CHECKOUT HANDLER
  const handleCheckout = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    //send a post req to the server
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: [course],
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      courseTitle: formData.courseTitle,
      courseId: course.id,
    });

    // redirect to the stripe payment
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="wrapper py-10 min-h-screen mt-32">
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
            <label
              htmlFor="name"
              className="cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Sarah"
              value={formData.name}
              readOnly
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="email"
              className="cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="hello@gmail.com"
              value={formData.email}
              readOnly
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="mobile"
              className="cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
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
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="address"
              className="cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
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
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="address"
              className="cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Course title
            </label>
            <input
              type="text"
              id="courseTitle"
              placeholder="Mastering Graphic Design"
              value={formData.courseTitle}
              readOnly
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label
              htmlFor="address"
              className="cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Price (USD)
            </label>
            <input
              type="number"
              id="price"
              placeholder="$100"
              value={formData.price}
              readOnly
              className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          </div>

          <button
            role="link"
            type="submit"
            className="bg-black py-4 rounded-lg text-white uppercase hover:bg-gray-700 duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
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
