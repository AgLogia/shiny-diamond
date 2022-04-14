import Image from 'next/image';
import Link from 'next/link';
import Projects from '../../pages/api/project';
import SectionTitle2 from '../SectionTitle2';

const ProjectSection = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className='wpo-project-area-s2 section-padding'>
      <div className='container'>
        <SectionTitle2 subTitle={'Featured Works'} mainTitle={'Our Services'} vText={'Our Services'} />
        <div className='row align-items-center'>
          <div className='wpo-project-wrap'>
            <div className='sortable-gallery'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='project-grids gallery-container clearfix'>
                    {Projects.map((project, pot) => (
                      <div className='grid' key={pot + project.title}>
                        <div className='wpo-project-item'>
                          <div className='wpo-project-img'>
                            <Image src={project.pImg.src} width={project.pImg.width} height={project.pImg.height} alt='' />
                            <div className='left-border'></div>
                            <div className='right-border'></div>
                          </div>
                          <div className='wpo-project-text'>
                            <h2>
                              <Link
                                href={`/services/${project.id}`}
                              >
                                {project.title}
                              </Link>
                            </h2>
                            <span>{project.subTitle}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
