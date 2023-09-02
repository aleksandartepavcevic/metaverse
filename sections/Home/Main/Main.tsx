"use client";

import React from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

import spaceImage from "@/public/home-main.webp";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: (delay) => ({
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      pathLength: { delay, duration: 2, ease: "easeInOut" },
      fill: { delay: 2.8, duration: 1, ease: [1, 0, 0.8, 1] },
    },
  }),
} as Variants;

const image = {
  hidden: {
    opacity: 0,
    scale: 0,
    transformOrigin: "bottom center",
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 4,
      duration: 1,
      ease: "easeInOut",
    },
  },
} as Variants;

const Main = () => {
  return (
    <section className="md:relative flex justify-center items-center max-md:h-screen md:pt-[240px] md:pb-[440px]">
      <div className="relative z-50 flex">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3.8, duration: 1 } }}
          className="absolute top-0 md:-left-[110px] md:top-[40px] text-gray-300/50 border-l-2 border-gray-300/50 pl-1 leading-4"
        >
          Home
        </motion.p>
        <motion.svg
          fill="none"
          width="794"
          height="261"
          viewBox="0 0 794 261"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full stroke-2 stroke-white"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            key="1"
            variants={icon}
            custom={0.1}
            d="M0.936005 2.18993H18.876L53.1 48.5579L86.496 2.18993H104.436V105H85.53V35.1719L53.79 77.3999H51.582L19.704 33.7919V105H0.936005V2.18993Z"
            fill="white"
          />
          <motion.path
            key="2"
            variants={icon}
            custom={0.2}
            d="M124.112 2.18993H192.422V18.7499H142.88V45.1079H189.662V61.6679H142.88V88.4399H192.422V105H124.112V2.18993Z"
            fill="white"
          />
          <motion.path
            key="3"
            variants={icon}
            custom={0.3}
            d="M224.4 18.7499H197.766V2.18993H269.526V18.7499H243.306V105H224.4V18.7499Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={0.4}
            d="M301.154 2.18993H325.442L360.908 105H340.484L333.17 82.9199H293.426L285.974 105H265.688L301.154 2.18993ZM327.788 66.3599L313.298 23.0279L298.808 66.3599H327.788Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={0.5}
            d="M357.733 2.18993H378.157L404.377 81.2639L430.459 2.18993H450.883L415.141 105H393.613L357.733 2.18993Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={0.6}
            d="M462.374 2.18993H530.683V18.7499H481.142V45.1079H527.923V61.6679H481.142V88.4399H530.683V105H462.374V2.18993Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={0.7}
            d="M544.446 2.18993H582.672C589.664 2.18993 595.874 3.47793 601.302 6.05394C606.73 8.53793 610.916 12.2179 613.86 17.0939C616.896 21.9699 618.414 27.8119 618.414 34.6199C618.414 41.6119 616.758 47.6379 613.446 52.6979C610.134 57.6659 605.58 61.3459 599.784 63.7379L623.382 105H602.13L580.878 67.0499H563.214V105H544.446V2.18993ZM582.948 50.4899C588.008 50.4899 592.056 49.0639 595.092 46.2119C598.128 43.2679 599.646 39.4039 599.646 34.6199C599.646 29.8359 598.128 26.0179 595.092 23.1659C592.056 20.2219 588.008 18.7499 582.948 18.7499H563.214V50.4899H582.948Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={0.8}
            d="M672.39 106.656C664.294 106.656 657.256 105.138 651.276 102.102C645.388 99.0659 640.788 95.2479 637.476 90.6479C634.164 85.9559 632.048 81.0799 631.128 76.0199L648.792 71.3279C650.172 76.9399 652.932 81.3099 657.072 84.4379C661.212 87.5659 666.41 89.1299 672.666 89.1299C677.45 89.1299 681.314 87.9339 684.258 85.5419C687.294 83.1499 688.812 80.2979 688.812 76.9859C688.812 73.9499 687.708 71.3279 685.5 69.1199C683.384 66.8199 680.486 65.3019 676.806 64.5659L661.35 61.5299C653.162 59.9659 646.722 56.4239 642.03 50.9039C637.338 45.3839 634.992 38.6679 634.992 30.7559C634.992 25.2359 636.556 20.1759 639.684 15.5759C642.904 10.8839 647.136 7.20393 652.38 4.53593C657.716 1.86793 663.374 0.533936 669.354 0.533936C676.99 0.533936 683.476 1.82194 688.812 4.39794C694.148 6.97393 698.288 10.2399 701.232 14.1959C704.268 18.0599 706.292 22.1539 707.304 26.4779L689.778 31.9979C687.846 27.0299 685.224 23.4879 681.912 21.3719C678.6 19.1639 674.414 18.0599 669.354 18.0599C666.502 18.0599 663.926 18.6579 661.626 19.8539C659.418 21.0499 657.67 22.6139 656.382 24.5459C655.186 26.3859 654.588 28.2719 654.588 30.2039C654.588 33.2399 655.6 35.9079 657.624 38.2079C659.648 40.4159 662.454 41.8419 666.042 42.4859L680.67 45.6599C689.594 47.5919 696.494 51.2719 701.37 56.6999C706.246 62.0359 708.684 68.4299 708.684 75.8819C708.684 81.2179 707.212 86.2319 704.268 90.9239C701.324 95.6159 697.092 99.4339 691.572 102.378C686.144 105.23 679.75 106.656 672.39 106.656Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={0.9}
            d="M725.032 2.18993H793.342V18.7499H743.8V45.1079H790.582V61.6679H743.8V88.4399H793.342V105H725.032V2.18993Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={1}
            d="M0.936005 154.19H18.876L53.1 200.558L86.496 154.19H104.436V257H85.53V187.172L53.79 229.4H51.582L19.704 185.792V257H0.936005V154.19Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={1.1}
            d="M151.16 154.19H175.448L210.914 257H190.49L183.176 234.92H143.432L135.98 257H115.694L151.16 154.19ZM177.794 218.36L163.304 175.028L148.814 218.36H177.794Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={1.2}
            d="M224.4 154.846H376.777C387.541 154.846 396.971 157.008 405.067 161.332C413.163 165.656 419.419 171.728 423.835 179.548C428.251 187.276 430.459 196.154 430.459 206.182C430.459 216.118 428.251 224.996 423.835 232.816C419.419 240.636 413.117 246.754 404.929 251.17C396.833 255.494 387.449 257.656 376.777 257.656H224.4V154.846ZM377.191 241.096C384.091 241.096 390.117 239.67 395.269 236.818C400.513 233.966 404.515 229.918 407.275 224.674C410.127 219.338 411.553 213.174 411.553 206.182C411.553 199.19 410.127 193.072 407.275 187.828C404.515 182.584 400.513 178.536 395.269 175.684C390.117 172.832 384.091 171.406 377.191 171.406H243.306V241.096H377.191Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={1.3}
            d="M446.631 155.846H461.259L510.249 221.81V155.846H529.017V258.656H514.251L465.399 191.45V258.656H446.631V155.846Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={1.4}
            d="M548.918 155.846H617.228V172.406H567.686V198.764H614.468V215.324H567.686V242.096H617.228V258.656H548.918V155.846Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={1.5}
            d="M667.698 260.312C659.602 260.312 652.564 258.794 646.584 255.758C640.696 252.722 636.096 248.904 632.784 244.304C629.472 239.612 627.356 234.736 626.436 229.676L644.1 224.984C645.48 230.596 648.24 234.966 652.38 238.094C656.52 241.222 661.718 242.786 667.974 242.786C672.758 242.786 676.622 241.59 679.566 239.198C682.602 236.806 684.12 233.954 684.12 230.642C684.12 227.606 683.016 224.984 680.808 222.776C678.692 220.476 675.794 218.958 672.114 218.222L656.658 215.186C648.47 213.622 642.03 210.08 637.338 204.56C632.646 199.04 630.3 192.324 630.3 184.412C630.3 178.892 631.864 173.832 634.992 169.232C638.212 164.54 642.444 160.86 647.688 158.192C653.024 155.524 658.682 154.19 664.662 154.19C672.298 154.19 678.784 155.478 684.12 158.054C689.456 160.63 693.596 163.896 696.54 167.852C699.576 171.716 701.6 175.81 702.612 180.134L685.086 185.654C683.154 180.686 680.532 177.144 677.22 175.028C673.908 172.82 669.722 171.716 664.662 171.716C661.81 171.716 659.234 172.314 656.934 173.51C654.726 174.706 652.978 176.27 651.69 178.202C650.494 180.042 649.896 181.928 649.896 183.86C649.896 186.896 650.908 189.564 652.932 191.864C654.956 194.072 657.762 195.498 661.35 196.142L675.978 199.316C684.902 201.248 691.802 204.928 696.678 210.356C701.554 215.692 703.992 222.086 703.992 229.538C703.992 234.874 702.52 239.888 699.576 244.58C696.632 249.272 692.4 253.09 686.88 256.034C681.452 258.886 675.058 260.312 667.698 260.312Z"
            fill="white"
          />
          <motion.path
            variants={icon}
            custom={1.6}
            d="M757.048 260.312C748.952 260.312 741.914 258.794 735.934 255.758C730.046 252.722 725.446 248.904 722.134 244.304C718.822 239.612 716.706 234.736 715.786 229.676L733.45 224.984C734.83 230.596 737.59 234.966 741.73 238.094C745.87 241.222 751.068 242.786 757.324 242.786C762.108 242.786 765.972 241.59 768.916 239.198C771.952 236.806 773.47 233.954 773.47 230.642C773.47 227.606 772.366 224.984 770.158 222.776C768.042 220.476 765.144 218.958 761.464 218.222L746.008 215.186C737.82 213.622 731.38 210.08 726.688 204.56C721.996 199.04 719.65 192.324 719.65 184.412C719.65 178.892 721.214 173.832 724.342 169.232C727.562 164.54 731.794 160.86 737.038 158.192C742.374 155.524 748.032 154.19 754.012 154.19C761.648 154.19 768.134 155.478 773.47 158.054C778.806 160.63 782.946 163.896 785.89 167.852C788.926 171.716 790.95 175.81 791.962 180.134L774.436 185.654C772.504 180.686 769.882 177.144 766.57 175.028C763.258 172.82 759.072 171.716 754.012 171.716C751.16 171.716 748.584 172.314 746.284 173.51C744.076 174.706 742.328 176.27 741.04 178.202C739.844 180.042 739.246 181.928 739.246 183.86C739.246 186.896 740.258 189.564 742.282 191.864C744.306 194.072 747.112 195.498 750.7 196.142L765.328 199.316C774.252 201.248 781.152 204.928 786.028 210.356C790.904 215.692 793.342 222.086 793.342 229.538C793.342 234.874 791.87 239.888 788.926 244.58C785.982 249.272 781.75 253.09 776.23 256.034C770.802 258.886 764.408 260.312 757.048 260.312Z"
            fill="white"
          />
        </motion.svg>
      </div>
      <motion.div
        variants={image}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 overflow-hidden right-0 w-[90vw] h-[400px] rounded-ss-[180px] rounded-es-[10px] md:w-full md:h-[485px] md:rounded-ss-[8.75rem] md:rounded-es-[2.5rem] md:rounded-se-2xl md:rounded-ee-2xl"
      >
        <Image src={spaceImage} alt="Space" objectFit="cover" fill />
      </motion.div>
    </section>
  );
};

export default Main;
