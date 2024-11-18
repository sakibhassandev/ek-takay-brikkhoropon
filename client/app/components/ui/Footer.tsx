import React from "react";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    name: "মূল পাতা",
    link: "/",
  },
  {
    name: "আমাদের গল্প",
    link: "/our-story",
  },
  {
    name: "ইভেন্টসমূহ",
    link: "/events",
  },
  {
    name: "সংগ্রহ",
    link: "/collections",
  },
  {
    name: "ব্যয়",
    link: "/expenses",
  },
  {
    name: "যোগাযোগ",
    link: "/contact",
  },
  {
    name: "Refund Policy",
    link: "/refund-policy",
  },
  {
    name: "Terms & Conditions",
    link: "/terms-condition",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "যুক্ত হোন",
    link: "/join",
  },
  {
    name: "লগইন",
    link: "/login",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <div className="mb-4">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              className="w-48 object-contain bg-white p-2 rounded"
              width={400}
              height={400}
            />
          </div>
          <div className="facebook group text-sm">
            <Link
              href="https://www.facebook.com/groups/2736081320012229/?ref=share&mibextid=NSMWBT"
              target="_blank"
              className="flex gap-2 items-center mt-4"
            >
              <Facebook
                size={30}
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              />
              ফেসবুক গ্রুপ
            </Link>
          </div>
          <div className="facebook page text-sm">
            <Link
              href="https://www.facebook.com/profile.php?id=100068475481109&mibextid=ZbWKwL"
              target="_blank"
              className="flex gap-2 items-center mt-4"
            >
              <Facebook
                size={30}
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              />
              ফেসবুক পেজ
            </Link>
          </div>
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
            Donate Now
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`${item.link}`}
                  target="_blank"
                  className="text-sm inline-block mb-2 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-8 h-8 mt-1 text-orange-500" />
              <p>
                ব্লক ২, হাজী আবুল কালাম ভবনের নিচ তলা,হাটহাজারী, চট্টগ্রাম
                বিশ্ববিদ্যালয়, চট্টগ্রাম
              </p>
            </div>
            <Link href="tel:+8801843048666" className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <p>018-4304-8666</p>
            </Link>
            <Link
              href="mailto:ektakaybrikkhoropon@gmail.com"
              className="flex items-center gap-3"
            >
              <Mail className="w-5 h-5 text-orange-500" />
              <p>ektakaybrikkhoropon@gmail.com</p>
            </Link>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                RJSC Registration No: *******
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                This web application is designed and developed by{" "}
                <Link
                  href="https://sakibhassan.com"
                  target="_blank"
                  className="font-bold text-base hover:text-orange-500 transition-colors"
                >
                  Sakib Hassan
                </Link>
                &nbsp; as a Social welfare donation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
    </footer>
  );
};

export default Footer;
