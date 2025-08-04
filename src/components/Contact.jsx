import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {

  const [name, setname] = useState("");
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] =  useState("")

  function handleClick(e){
    e.prventDefault();
    setname("")
    setEmail("");
    setSubject("")
    setMessage("")

  }

  

  return (
    <section className="bg-slate-950 text-white min-h-screen" id="contact">
      <h1 className="text-emerald-400 text-3xl font-bold text-center mb-5 py-10">
        Get in touch
      </h1>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1">
        {/* left side start here */}
        <div className="left">
          <div className="bg-slate-900/60 border border-emerald-400 rounded-2xl p-5 m-5 ">
            <h1 className="text-emerald-300 text-2xl mb-3">Send a message</h1>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-3 justify-center"
            >
              <input
                type="hidden"
                name="access_key"
                value="5853556a-5994-4cbb-8dd8-66c97b386c32"
              ></input>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name "
                onChange={e => setname(e.target.value)}
                className="focus:border-2 border-white outline rounded-md p-3"
                required={true}
              />
              <input
                type="email"
                name="email"
                value={email}
                 onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email here "
                className="focus:border-2 border-white outline rounded-md p-3"
                required={true}
              />
              <input
                type="text"
                placeholder="What is subject?"
                value={subject}
                 onChange={e => setSubject(e.target.value)}
                className="focus:border-2 border-white outline rounded-md p-3"
                required={true}
              />
              <textarea
                name=""
                id=""
                value={message}
                 onChange={e => setMessage(e.target.value)}
                placeholder="Tell me about your queries"
                className="focus:border-2 border-white outline rounded-md p-3 w-full h-40"
                required={true}
              ></textarea>
              <button type="submit" className="bg-emerald-400 rounded-2xl p-3 " onClick={handleClick}>
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* left side end here */}

        {/* right side div start here */}
        <div className="right">
          {/* contact info */}
          <div className="conatct-info flex flex-col gap-3 border border-emerald-400 rounded-2xl bg-slate-900/30 p-5 m-5">
            <h1 className="text-emerald-300 text-2xl">Contact Information</h1>
            <div className="flex gap-3">
              <p className="bg-emerald-200 rounded-xl p-3 text-emerald-500">
                {<Mail />}
              </p>

              <p className="flex flex-col">
                <span>Email</span>
                <span>skc722768@gmail.com</span>
              </p>
            </div>

            <div className="flex gap-3">
              <p className="bg-emerald-200 rounded-xl p-3 text-emerald-500">
                {<Phone />}
              </p>
              <p className="flex flex-col">
                <span>Phone</span>
                <span>+91 9219576699</span>
              </p>
            </div>

            <div className="flex gap-3">
              <p className="bg-emerald-200 rounded-xl p-3 text-emerald-500">
                {<MapPin />}
              </p>
              <p className="flex flex-col">
                <span>Location</span>
                <span>Kanpur, India</span>
              </p>
            </div>
          </div>

          {/* social part */}

          <div className="social flex flex-col gap-3 border border-emerald-400 rounded-2xl bg-slate-900/30 p-5 m-5">
            <h1 className="text-emerald-300 text-2xl">Follow me on social media</h1>
            <div className="flex  gap-5">
              <button
                onClick={() =>
                  window.open("https://github.com/freakkyshivam", "_blank")
                }
                className="p-3 rounded-xl border  cursor-pointer text-emerald-500 bg-emerald-200 "
              >
                {" "}
                <Github className=" hover:text-black transition-colors " />{" "}
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shivam-chaudhary-289400357?",
                    "_blank"
                  )
                }
                className="p-3 rounded-xl border cursor-pointer text-emerald-500 bg-emerald-200  "
              >
                {" "}
                <Linkedin className=" hover:text-sky-500 transition-colors " />{" "}
              </button>

              <button
                onClick={() =>
                  window.open("https://x.com/freakkyshivam", "_blank")
                }
                className="p-3 rounded-xl border cursor-pointer text-emerald-500 bg-emerald-200"
              >
                {" "}
                <Twitter className=" hover:text-sky-500 transition-colors" />{" "}
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/freakkyshivam/",
                    "_blank"
                  )
                }
                className="p-3 rounded-xl border cursor-pointer text-emerald-500 bg-emerald-200  "
              >
                {" "}
                <Instagram className="hover:text-orange-500 transition-colors" />{" "}
              </button>
            </div>
          </div>
        </div>
        {/* right side div end here */}
      </div>
    </section>
  );
};

export default Contact;
