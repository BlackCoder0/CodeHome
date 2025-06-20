import React, { useEffect, useRef, useState } from 'react';
import { webglPostprocessing } from '@/lib/three-examples/webgl_postprocessing_pixel';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { BookOpen, Music, Tv, Film, Users, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/magicui/Fparticles";
import { LayoutGrid, type Card } from "../ui/layout-grid";
import { motion } from 'motion/react';

type TabType = 'books' | 'music' | 'anime' | 'movies' | 'characters';

const tabs = [
  { label: '书籍', value: 'books', icon: BookOpen },
  { label: '音乐', value: 'music', icon: Music },
  { label: '番剧', value: 'anime', icon: Tv },
  { label: '电影', value: 'movies', icon: Film },
  { label: '角色', value: 'characters', icon: Users },
];

const Hobbies: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<TabType>('books');
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const cleanup = webglPostprocessing(mountRef.current);
    return () => cleanup?.();
  }, []);

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleOutsideClick = () => {
    setSelectedCard(null);
  };

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House in the woods
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life.
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          House above the clouds
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Perched high above the world, this house offers breathtaking views and a
          unique living experience. It&apos;s a place where the sky meets home,
          and tranquility is a way of life.
        </p>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Greens all over
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          Rivers are serene
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the
          perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    );
  };

  const cards: Card[] = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      content: <SkeletonFour />,
      className: "md:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      content: <SkeletonFour />,
      className: "md:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      content: <SkeletonFour />,
      className: "md:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      content: <SkeletonFour />,
      className: "md:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      content: <SkeletonFour />,
      className: "md:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      content: <SkeletonFour />,
      className: "md:col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const allCards = [...cards];
  const topCards = cards.slice(0, 4);
  const bottomCards = cards.slice(4);

  return (
    <section id="hobbies" className="relative min-h-screen py-16 bg-gradient-to-b from-[#2e3346] to-black text-white">
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        size={1.5}
        staticity={15}
        color={"#ffffff"}
        vy={10}
      />
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 pt-36">
          <h2 className="text-4xl font-bold mb-2">我的兴趣爱好</h2>
          <p className="text-white/70">探索我喜欢的书籍、音乐、番剧、电影和角色</p>
        </div>

        <div className="flex justify-center mb-10">
          <Dock direction="middle">
            {tabs.map((tab) => (
              <DockIcon key={tab.value} onClick={() => setActiveTab(tab.value as TabType)}>
                <tab.icon className={cn("size-6", activeTab === tab.value ? "text-white" : "text-gray-400")} />
              </DockIcon>
            ))}
          </Dock>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2 rounded-lg overflow-hidden border border-white/10 shadow-lg relative z-10">
            <div ref={mountRef} className="w-full h-[300px] sm:h-[400px]" style={{ background: 'transparent' }} />
          </div>
          <div className="hidden lg:block lg:col-span-3">
            <LayoutGrid cards={topCards} onCardClick={handleCardClick} />
          </div>
        </div>

        <div className="lg:hidden h-screen">
          <LayoutGrid cards={allCards} onCardClick={handleCardClick} />
        </div>

        {bottomCards.length > 0 && (
          <div className="hidden lg:block h-80">
            <LayoutGrid cards={bottomCards} onCardClick={handleCardClick} />
          </div>
        )}
      </div>

      {/* Selected Card Logic */}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 bg-black z-[90]",
          selectedCard ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selectedCard ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {selectedCard && (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3/5 w-full md:w-1/2 z-[100] flex justify-center items-center">
          <motion.div
            layoutId={`card-${selectedCard.id}`}
            className="relative w-full h-full bg-white rounded-lg overflow-hidden"
          >
            <SelectedCardUI selected={selectedCard} />
            <ImageComponent card={selectedCard} />
          </motion.div>
        </div>
      )}
    </section>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      alt="thumbnail"
    />
  );
};

const SelectedCardUI = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

export default Hobbies;