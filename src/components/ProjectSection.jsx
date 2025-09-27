import { ArrowRight, ExternalLinkIcon, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "سایت نمایش هوش مصنوعی",
    description:
      "سایتی برای نمایش هوش مصنوعی طراحی زیبا و شیک و نشان دهنده ی برای این که سایت هایی با ورودی تک صفحه ای و نشنان دادن زیبایی و سادگی در طراحی های خاص",
    Image: "./Landing_page.png",
    Tags: ["React", "Tailwind CSS", "Radix UI", "TypeScript"],
    demoUrl: "https://matinmuhammadi1381.github.io/Landing_page/",
    githubUrl: "https://github.com/matinmuhammadi1381/Landing_page",
  },
  {
    id: 2,
    title: "سایت نمایش محصولات نایک",
    description:
      "یه سایت با طراحی مینیمال و شیک برای نمایش محصولات نایک همراه با عکس و انیمیشن های مختلف با استفاده از ریکت و تیلویند ساخته شده",
    Image: "./Nike.png",
    Tags: ["React", "Tailwind CSS", "Radix UI"],
    demoUrl: "https://matinmohamady0081.github.io/nike-project/",
    githubUrl: "https://github.com/MatinMohamady0081/nike-project",
  },
  {
    id: 3,
    title: " سایتی آینده نگری برای بانکها ",
    description:
      "سایت با طراحی مدرن و دیدگاهی جدید به آینده ای مدرن از بانک ها  ساخته شده با طراحی یونیک و انیمیشن های مختلف با ریکت و تیلویند",
    Image: "./Bank.png",
    Tags: ["React", "Tailwind CSS", "Radix UI"],
    demoUrl: "https://matinmohamady0081.github.io/bank-project/",
    githubUrl: "https://github.com/MatinMohamady0081/bank-project",
  },
  {
    id: 4,
    title: " سایت ساخت فاکتور شرکتی ",
    description:
      "سایتی برای ساخت بارکد و فاکتور های شرکتی با طراحی ساده و مینیمال و راحت برای شرکت های کوچیک و بزرگ ساخته شده با ریمت ئ متریال یئ ای ",
    Image: "./factor.png",
    Tags: ["React", "metrial ui", "Radix UI"],
    demoUrl: "https://github.com/MatinMohamady0081/project1",
    githubUrl: "https://github.com/MatinMohamady0081/project1",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className=" py-24 px-4 relative">
      <div className=" container mx-auto max-w-5xl ">
        <h2 className=" text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className=" text-primary">پروژه های</span> من{" "}
        </h2>

        <p className=" text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          بخشی از پروژه های که انجام داده ام و پروژه ها رو میتونید در اینجا
          مشاهده کنید امیدوارم خوشتون بیاد و خوشحال میشم نظرتون رو برام ایمیل
          کنید
        </p>

        <div className=" grid grid-cols-1 md:col-end-2 lg:grid-cols-3 gap-8">
          {projects.map((projects, key) => (
            <div
              key={key}
              className=" group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className=" h-48 overflow-hidden">
                <img
                  src={projects.Image}
                  alt={projects.title}
                  className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className=" p-6">
                <div className=" flex flex-wrap gap-2 mb-4">
                  {projects.Tags.map((tag) => (
                    <span className=" px-2 py-1 text-xs border font-medium rounded-full bg-primary/30 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className=" text-xl font-semibold mb-1">
                  {" "}
                  {projects.title}
                </h3>
                <p className="text-muted-foregroun text-sm mb-4">
                  {projects.description}
                </p>
                <div className=" flex justify-between items-center mb-2 ml-2">
                  <div className=" flex space-x-3">
                    <a
                      href={projects.demoUrl}
                      target="-blank"
                      className=" text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                    <a
                      target="-blank"
                      className=" text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={projects.githubUrl}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" text-center mt-12">
          <a
            href="https://github.com/MatinMuhammadi1381"
            target="_blank"
            className=" cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            گیت هاب من <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
