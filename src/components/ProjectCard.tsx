import React, { useState } from 'react';
import { PinContainer } from "./ui/3d-pin";
import { Dialog } from '@headlessui/react';

interface ProjectCardProps {
  title: string;
  description: string;
  gradient: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, gradient }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <PinContainer title={title} href="#">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 pb-2 m-0">
              {title}
            </h3>
            <p className="text-base font-normal text-slate-500 m-0 p-0">
              {description}
            </p>
            <div className={`flex flex-1 w-full rounded-lg mt-4 ${gradient}`} />
          </div>
        </PinContainer>
      </div>

      {/* 弹窗详情 */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-lg rounded-lg p-6 text-black">
            <Dialog.Title className="text-xl font-bold mb-2">{title}</Dialog.Title>
            <Dialog.Description className="text-sm mb-4">
              这是 {title} 的项目详情展示内容。你可以在这里加入图片、技术栈、GitHub 链接等信息。
            </Dialog.Description>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded bg-slate-800 text-white hover:bg-slate-700"
            >
              关闭
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
