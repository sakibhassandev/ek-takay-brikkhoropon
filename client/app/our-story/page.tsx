import Link from "next/link";
import CustomButton from "../components/CustomButton";

export const metadata = {
  title: "আমাদের গল্প",
  description:
    "১টাকায় বৃক্ষরোপণ একটি পরিবেশবাদী সংগঠন। যা ২০১৯সালের ১১জুন প্রতিষ্ঠা লাভ করে। সংগঠনটি তার জন্মলগ্ন থেকে পরিবেশ সুরক্ষায় কাজ করে যাচ্ছে। মূলত দৈনিক এক টাকা সঞ্চয় করার মধ্যে দিয়ে একজন ব্যক্তি ত্রিশ দিনে ত্রিশ টাকা সঞ্চয় করবে। যা দিয়ে মাসে একটি গাছ রোপণ করবে। এভাবে আমরা যদি এই ক্যাম্পেইনটি ১৬কোটি মানুষের কাছে পৌছাতে পারি তবে দৈনিক এক টাকা সঞ্চয়ের মধ্যে দিয়ে মাসে ১৬কোটি গাছ রোপণ সম্ভব। যার মধ্যে দিয়ে ২৫%বনায়নে আমরা উন্নীত হতে পারবো। - এই ভাবনা থেকে এক টাকায় বৃক্ষরোপণ এর যাত্রা শুরু।",
};

export default function OurStory() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 mt-20">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-center text-3xl font-bold mb-8">আমাদের গল্প</h1>

        <div>
          <p className="mb-4 text-sm text-muted-foreground">১১জুন, ২০১৯.</p>

          <div className="space-y-6">
            <p className="leading-8">
              <b>১টাকায় বৃক্ষরোপণ</b> একটি পরিবেশবাদী সংগঠন। যা ২০১৯সালের ১১জুন
              প্রতিষ্ঠা লাভ করে। সংগঠনটি তার জন্মলগ্ন থেকে পরিবেশ সুরক্ষায় কাজ
              করে যাচ্ছে। মূলত দৈনিক এক টাকা সঞ্চয় করার মধ্যে দিয়ে একজন ব্যক্তি
              ত্রিশ দিনে ত্রিশ টাকা সঞ্চয় করবে। যা দিয়ে মাসে একটি গাছ রোপণ করবে।
              এভাবে আমরা যদি এই ক্যাম্পেইনটি ১৬কোটি মানুষের কাছে পৌছাতে পারি তবে
              দৈনিক এক টাকা সঞ্চয়ের মধ্যে দিয়ে মাসে ১৬কোটি গাছ রোপণ সম্ভব। যার
              মধ্যে দিয়ে ২৫%বনায়নে আমরা উন্নীত হতে পারবো। - এই ভাবনা থেকে এক
              টাকায় বৃক্ষরোপণ এর যাত্রা শুরু।
            </p>
            <p className="leading-8">
              ১টাকায় বৃক্ষরোপণ শুধুমাত্র বৃক্ষরোপণ নয়, বৃক্ষের পরিচর্যাও নিশ্চিত
              করছে। পাশাপাশি মানুষকে সচেতন করতে, সদস্যদের দক্ষতা বৃদ্ধিতে
              সংগঠনটি ইতিমধ্যে বেশকিছু ক্যাম্পেইনও পরিচালনা করেছে।{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="flex flex-col items-center">
              <CustomButton
                variant="outline"
                className="bg-orange-400 text-black border-2 border-orange-300 px-8 py-3 rounded-md font-medium"
              >
                <Link
                  href="https://www.banglanews24.com/public/daily-chittagong/news/bd/1128625.details"
                  target="_blank"
                >
                  এখানে ক্লিক করুন
                </Link>
              </CustomButton>
              <p className="mt-2 text-center font-medium">বাংলা নিউজ</p>
            </div>

            <div className="flex flex-col items-center">
              <CustomButton
                variant="outline"
                className="bg-orange-400 text-black border-2 border-orange-300 px-8 py-3 rounded-md font-medium"
              >
                <Link
                  href="https://www.chattogramtribune.com/%e0%a6%9a%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a7%87%e0%a6%9e%e0%a7%8d%e0%a6%9c-%e0%a6%ab%e0%a6%b0-%e0%a6%ab%e0%a6%bf%e0%a6%89%e0%a6%9a%e0%a6%be%e0%a6%b0-%e0%a6%a8%e0%a6%be%e0%a6%ae%e0%a6%95/"
                  target="_blank"
                >
                  এখানে ক্লিক করুন
                </Link>
              </CustomButton>
              <p className="mt-2 text-center font-medium">চট্টগ্রাম ট্রিবিউন</p>
            </div>

            <div className="flex flex-col items-center">
              <CustomButton
                variant="outline"
                className="bg-orange-400 text-black border-2 border-orange-300 px-8 py-3 rounded-md font-medium"
              >
                <Link
                  href="https://dailydeshbanglanews.com/%e0%a6%9a%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%b2%e0%a7%87%e0%a6%9e%e0%a7%8d%e0%a6%9c-%e0%a6%ab%e0%a6%b0-%e0%a6%ab%e0%a6%bf%e0%a6%89%e0%a6%9a%e0%a6%be%e0%a6%b0-%e0%a6%a8%e0%a6%be%e0%a6%ae%e0%a6%95/"
                  target="_blank"
                >
                  এখানে ক্লিক করুন
                </Link>
              </CustomButton>
              <p className="mt-2 text-center font-medium">দেশ বাংলা</p>
            </div>
          </div>

          <p className="my-8 leading-8">
            আসুন না, একটি বার আমাদের নিজেদের অবস্থান থেকে একটু চেষ্টায় এই
            সুবিধাবঞ্চিত এবং টাকার অভাবে আঁধারে রয়ে যাওয়া প্রাণগুলোকে আরেকটাবার
            উজ্জীবিত করে তুলি ঠিক স্বাধীনতার রক্তিম সূর্যের মত।
          </p>

          <div className="flex justify-between max-sm:flex-col gap-4 mb-8">
            <CustomButton
              variant="outline"
              className="bg-orange-400 text-black border-2 border-orange-300 px-8 py-3 rounded-md font-medium"
            >
              <Link
                href="https://www.facebook.com/profile.php?id=100068475481109&mibextid=ZbWKwL"
                target="_blank"
              >
                এক টাকায় বৃক্ষরোপণ ফেসবুক পেইজ
              </Link>
            </CustomButton>
            <CustomButton
              variant="outline"
              className="bg-orange-400 text-black border-2 border-orange-300 px-8 py-3 rounded-md font-medium"
            >
              <Link
                href="https://www.facebook.com/groups/2736081320012229/?ref=share&mibextid=NSMWBT"
                target="_blank"
              >
                এক টাকায় বৃক্ষরোপণ ফেসবুক গ্রুপ
              </Link>
            </CustomButton>
          </div>

          <p className="mb-8 leading-8">
            আসুন, আমরা আমাদের নিজেদের অবদান থেকে একটু চেষ্টা করি এই সুবিধাবঞ্চিত
            এবং ঠিকানা অভাবে অক্ষরারে রয়ে যাওয়া প্রাণগুলোকে আলোকবর্তিকার
            উজ্জীবিত করার ঠিক স্বাধীনতার রক্তিম সূর্যের ন্যায়।
          </p>

          <div className="my-8">
            <p className="my-10">
              আমাদের সাথে যুক্ত হতে চাইলে{" "}
              <Link href="/join" className="font-bold text-lg">
                এখানে ক্লিক করুন
              </Link>
            </p>
            <p className="font-bold mb-2">
              &quot;ক্ষুধ ক্ষুধ বালিকারা বিন্দু বিন্দু জল
            </p>
            <p className="font-bold">গড়ে তোলো মহাদেশ সাগর অতল&quot;</p>
          </div>

          <p className="mb-8 leading-8">
            আমাদের এই ক্ষুদ্র অবদানে হয়তো কারো জীবন বদলাবে। হয়তো এই
            সুবিধাবঞ্চিতদের মধ্যেই লুকিয়ে আছে আগামীর জাস্টিস হোসেন, এ. পি. জে.
            আব্দুল কালামদের মত গুণী ব্যক্তিত্ব।
          </p>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">মূল বিষয়</h2>
            <p className="leading-8">
              আপনি প্রতিদিন ১ টাকা করে প্রতি মাসে ৩০ টাকা দিবেন। এভাবে ১০০ মানুষ
              প্রতি মাসে ৩০ টাকা করে দিলে হয় (৩০*১০০=৩০০০ টাকা)। এভাবে ২ হাজার
              বা ১০ হাজার মানুষের বৃহৎ একটি পরিবার পাবে এই সুবিধাবঞ্চিত এবং
              ঠিকানা অভাবে ভাগ্যহত অসহায়ের সহযে যাওয়া দেশদরদী হবে। ইতোমধ্যে এই
              সংগঠনে যুক্ত হয়েছে ৪১৮৩(প্রতিদিনই পরিবর্তনশীল) জন ভাগ্যবানরা,
              যারা প্রতিদিন এক টাকা করে দিচ্ছেন বলে খুব আছেন।
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
