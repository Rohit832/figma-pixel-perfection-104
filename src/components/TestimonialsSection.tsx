import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { StatisticsCard } from './StatisticsCard';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: '"My coach helped me restructure my salary and save ₹30,000 more every year. That\'s peace of mind."',
      authorName: 'Shreya M.',
      authorTitle: 'Fintech Startup Employee',
      authorImage: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/df963d8a5f97ecd73f0fd215c685222d3bea9124?placeholderIfAbsent=true',
      badgeText: 'Employee Testimonial',
      badgeVariant: 'employee' as const,
      quoteSize: 'sm' as const
    },
    {
      id: 2,
      quote: '"We used to get endless salary-related queries. Finsage solved that in just 3 sessions."',
      authorName: 'Shreya M.',
      authorTitle: 'Fintech Startup Employee',
      authorImage: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/3cf037d00b728b6f5567c4c999020d6e678cc399?placeholderIfAbsent=true',
      badgeText: 'HR TESTIMONIAL',
      badgeVariant: 'hr' as const,
      quoteSize: 'md' as const
    },
    {
      id: 3,
      quote: '"Finsage helped me shift from salary stress to savings joy — in just two sessions."',
      authorName: 'Shreya M.',
      authorTitle: 'Fintech Startup Employee',
      authorImage: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/647a7b12e380a1b0e51a0d1a1978228237e6a64f?placeholderIfAbsent=true',
      badgeText: 'Employee Testimonial',
      badgeVariant: 'employee' as const,
      quoteSize: 'lg' as const
    },
    {
      id: 4,
      quote: '"We used to get endless salary-related queries. Finsage solved that in just 3 sessions."',
      authorName: 'Shreya M.',
      authorTitle: 'Fintech Startup Employee',
      authorImage: 'https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/647a7b12e380a1b0e51a0d1a1978228237e6a64f?placeholderIfAbsent=true',
      badgeText: 'HR TESTIMONIAL',
      badgeVariant: 'hr' as const,
      quoteSize: 'md' as const
    }
  ];

  return (
    <section className="flex max-w-[962px] flex-col items-stretch">
      <header className="self-center flex w-[541px] max-w-full flex-col items-stretch text-center">
        <img
          src="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/beb65831e7b9ec619510c3be280bddd9b58e7c02?placeholderIfAbsent=true"
          alt="Finsage Logo"
          className="aspect-[3.09] object-contain w-[147px] self-center max-w-full rounded-[0px_0px_0px_0px]"
        />
        <div className="w-full mt-[22px] max-md:max-w-full">
          <h1 className="text-[rgba(53,115,105,1)] text-[40px] font-bold leading-[1.4] max-md:max-w-full">
            Love from Our Clients
          </h1>
          <p className="text-[rgba(46,114,101,1)] text-[15px] font-medium leading-[15px] mt-[22px] max-md:max-w-full">
            Discover what out clients have to say about their experiences with us and learn <br />
            how our services have positively impacted their life
          </p>
        </div>
      </header>
      
      <div className="w-full mt-[51px] max-md:max-w-full max-md:mt-10">
        <div className="flex w-full gap-[30px] flex-wrap max-md:max-w-full">
          <div className="min-w-60 grow shrink w-[373px] max-md:max-w-full">
            <TestimonialCard {...testimonials[0]} />
            <div className="mt-3.5">
              <TestimonialCard {...testimonials[1]} />
            </div>
          </div>
          
          <StatisticsCard
            backgroundImage="https://api.builder.io/api/v1/image/assets/d591ca4ef2284baeaec9047fb1d46b80/eac8e1c301a88fa964690e150d3669004adcff71?placeholderIfAbsent=true"
            statNumber="50k+"
            statDescription="Satisfied client's"
          />
        </div>
        
        <div className="flex w-full items-center gap-[30px] text-black flex-wrap mt-[26px] max-md:max-w-full">
          <div className="self-stretch min-w-60 grow shrink w-[373px] my-auto max-md:max-w-full">
            <TestimonialCard {...testimonials[2]} />
          </div>
          <div className="self-stretch min-w-60 grow shrink w-[373px] my-auto max-md:max-w-full">
            <TestimonialCard {...testimonials[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};
