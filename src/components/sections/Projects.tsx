import React, { useState } from 'react';
import { PinContainer } from "../ui/3d-pin";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MorphingText } from "@/components/magicui/morphing-text";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

// 项目数据类型定义
interface ProjectData {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  giteeUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: string;
}

// 示例项目数据
const projectsData: ProjectData[] = [
  {
    id: '1',
    title: '仿B站弹幕视频站-前端',
    description: '软件构件与中间件技术',
    detailedDescription: '本项目为为【仿Bilibili】的前端，项目采用前后端分离设计\n实现了用户认证；视频播放；弹幕发送和滚动等功能\n基于Vue.js框架，结合Element UI组件库构建了美观且交互性强的用户界面。弹幕功能通过自定义Barrage类实现多轨道弹幕的动态渲染与轨迹管理，提升用户体验。通过RESTful API与后端高效通信，利用本地存储管理用户状态',
    technologies: ['Vue.js','Element UI','JavaScript','Less','Axios'],
    image: 'public/assets/project/bilibili_vue.png',
    // demoUrl: 'https://ui.aceternity.com',
    githubUrl: 'https://github.com/BlackCoder0/bilibili_vue',
    giteeUrl: 'https://gitee.com/code-liang/1215bilibili',
    status: 'completed',
    category: '前后端分离项目'
  },
  {
    id: '2',
    title: '仿B站弹幕视频站-后端',
    description: '软件构件与中间件技术',
    detailedDescription: '本项目为为【仿Bilibili】的后端，项目采用前后端分离设计\n实现了用户点赞、评论；管理、用户系统等功能。\n采用Spring Boot+MyBatis实现数据持久化，支持用户、视频、评论、弹幕的增删改查，并通过自定义WebConfig实现跨域资源共享（CORS），保障前后端分离架构下的安全与灵活性。',
    technologies: ['Spring Boot', 'Spring MVC', 'MyBatis', 'MySQL','Maven'],
    image: 'from-pink-400 via-pink-300 to-white',
    // demoUrl: 'https://ui.aceternity.com',
    githubUrl: 'https://github.com/BlackCoder0/bilibili_web',
    giteeUrl: 'https://gitee.com/code-liang/1215bilibili_web',
    status: 'completed',
    category: '前后端分离项目'
  },
  {
    id: '3',
    title: 'myDiary日记软件',
    description: '安卓开发',
    detailedDescription: '本项目是一款基于Android的日记应用，实现《你的名字》电影内的日记创建、编辑、浏览与管理。极其内容维度管理和消失动画\n利用高德SDK集成，通过高德地图与定位服务实现地理位置标注等功能。',
    technologies: ['Android原生开发（Java）', '高德地图与定位SDK', 'Gradle'],
    image: 'public/assets/project/mydiary.jpg',
    demoUrl: '【《你的名字》日记软件复刻-安卓课设展示】 https://www.bilibili.com/video/BV1wdEYzfEYd/?share_source=copy_web&vd_source=01f661ab4de21d2681871c419ca383e9',
    githubUrl: 'https://github.com/BlackCoder0/myDiary',
    giteeUrl: 'https://gitee.com/code-liang/myDiary',
    status: 'completed',
    category: '安卓原生开发'
  },
  {
    id: '4',
    title: '大学学生管理系统',
    description: 'javaweb课程设计',
    detailedDescription: '本项目为基于JavaWeb的学生选课与管理系统，采用MVC架构，通过JSP页面进行前端展示，Servlet负责业务逻辑处理，结合JDBC实现与后端数据库的高效交互。\n项目注重模块化设计，涵盖学生、教师、课程、班级等多维度管理，支持用户认证、权限分级、数据分页与动态查询，提升了系统的可扩展性与安全性',
    technologies: ['Java', 'Servlet', 'JDBC', 'MySQL'],
    image: 'public/assets/project/stusym.png',
    githubUrl: 'https://github.com/BlackCoder0/Wuyi_StuSym',
    giteeUrl: 'https://gitee.com/code-liang/wuyi_stusym',
    status: 'completed',
    category: 'javaweb+数据库'
  },
  {
    id: '5',
    title: '方舟粒子特效模拟',
    description: '《明日方舟》官网特效模拟',
    detailedDescription: '本项目是明日方舟为主题的静态网页展示平台，复刻其官网的粒子特效效果，并在其基础上拓展以实现更丰富的交互\n项目经cloudflare静态部署，可直接访问，响应式设计使得移动端体验友好\n上线三个月以后破10w浏览',
    technologies: ['HTML', 'JavaScript'],
    image: 'public/assets/project/arkpoints.png',
    demoUrl: 'arkpoints.top',
    githubUrl: 'https://github.com/BlackCoder0/Arknights-FlowingPoints',
    giteeUrl: 'https://gitee.com/code-liang/arknights-flowing-points',
    status: 'completed',
    category: '静态网站'
  },
  {
    id: '6',
    title: 'MadokaRunes工具站',
    description: '《魔法少女小圆》同人工具站',
    detailedDescription: '本项目是以魔法少女小圆为主题的前端可视化网站，前端基于Vue 3+Vite，实现高效的组件化开发与热模块替换。\n项目通过响应式数据驱动地图、路径与交互动画，动态绘制角色行动轨迹，并通过精细的CSS保证多端适配和视觉一致性。\n字体生成器支持用户自定义字体大小和颜色，并通过 HTML5 canvas将转换后的文本渲染为图片，实现一键导出无背景字体截图',
    technologies: ['Vue 3', 'JavaScript'],
    image: 'public/assets/project/MadokaRunes.png',
    demoUrl: 'madorunes.cn',
    githubUrl: 'https://github.com/BlackCoder0/Madoka-Runes',
    giteeUrl: 'https://gitee.com/code-liang/Madoka-Runes',
    status: 'completed',
    category: 'Vue静态网站'
  },
  {
    id: '7',
    title: 'Codeの家',
    description: '个人网站',
    detailedDescription: '？？？',
    technologies: ['？', '？'],
    image: 'from-[#acc8e3] to-[#2e3346]',
    demoUrl: '？',
    githubUrl: 'https://github.com/BlackCoder0/CodeHome',
    giteeUrl: 'https://gitee.com/code-liang/codehome',
    status: 'in-progress',
    category: '？？？'
  },
];


// 项目卡片组件
interface ProjectCardProps {
  project: ProjectData;
  onClick: () => void;
}


interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-slate-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                <span className="text-slate-400">{project.category}</span>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {project.image.endsWith('.png') || project.image.endsWith('.jpg') || project.image.endsWith('.jpeg') || project.image.endsWith('.webp') ? (
              <div className="w-full rounded-lg mb-6">
                <img src={project.image.startsWith('public/') ? project.image.replace('public', '') : project.image} alt={project.title} className="w-full object-contain" />
              </div>
            ) : (
              <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${project.image} mb-6`} />
            )}
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">项目描述</h3>
                <p className="text-slate-300 leading-relaxed whitespace-pre-line">{project.detailedDescription}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">技术栈</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">项目状态</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {project.status === 'completed' ? '已完成' :
                   project.status === 'in-progress' ? '进行中' : '计划中'}
                </span>
              </div>
              
              {(project.demoUrl || project.githubUrl || project.giteeUrl) && (
                <div className="flex gap-4 pt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      查看演示
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      <img src="/assets/github.svg" alt="GitHub" width={32} height={32} className="inline-block align-middle" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  )}
                  {project.giteeUrl && (
                    <a
                      href={project.giteeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      <img src="/assets/gitee.svg" alt="Gitee" width={32} height={32} className="inline-block align-middle" />
                      <span className="sr-only">Gitee</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 主要的Projects组件
const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-[#acc8e3] to-[#2e3346]">
        <div className="container mx-auto px-4">
          <div className="relative h-[120px] w-full overflow-hidden text-center mb-1">
          <MorphingText texts={["我的项目", "My Project"]} />
          </div>

        </div>
 

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-12">
          <BentoGrid className="max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14 mb-16">
            {projectsData.map((project) => (
              <PinContainer key={project.id} title={project.category} href="#">
                <BentoGridItem className="w-[18rem] h-[18rem] bg-white border-gray-200">
                  <div 
                    className="flex flex-col h-full tracking-tight text-slate-800 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleProjectClick(project);
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-900">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status === 'completed' ? '已完成' :
                         project.status === 'in-progress' ? '进行中' : '计划中'}
                      </span>
                    </div>
                    
                    <div className="text-base !m-0 !p-0 font-normal mb-4">
                      <span className="text-slate-600">
                        {project.description}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {project.image.endsWith('.png') || project.image.endsWith('.jpg') || project.image.endsWith('.jpeg') || project.image.endsWith('.webp') ? (
                        <div className="w-full h-32 max-h-32 rounded-lg mt-auto overflow-hidden border">
                          <img src={project.image.startsWith('public/') ? project.image.replace('public', '') : project.image} alt={project.title} className="w-full h-full max-h-32 object-cover" />
                        </div>
                    ) : (
                      <div className={`w-full h-32 max-h-32 rounded-lg mt-auto bg-gradient-to-br ${project.image}`} />
                    )}
                  </div>
                </BentoGridItem>
              </PinContainer>
            ))}
          </BentoGrid>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mt-12">
            <p className="text-slate-300 text-sm">点击项目卡片查看详细信息</p>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};


export default Projects;
