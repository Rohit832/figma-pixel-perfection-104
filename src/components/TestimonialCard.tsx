import React from 'react';

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  badgeText: string;
  badgeVariant: 'employee' | 'hr';
  quoteSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorTitle,
  authorImage,
  badgeText,
  badgeVariant,
  quoteSize = 'md'
}) => {
  const getQuoteTextSize = () => {
    switch (quoteSize) {
      case 'sm': return 'text-[19px]';
      case 'md': return 'text-xl';
      case 'lg': return 'text-[21px]';
      case 'xl': return 'text-2xl';
      default: return 'text-xl';
    }
  };

  const getBadgeStyles = () => {
    if (badgeVariant === 'hr') {
      return {
        background: 'bg-[rgba(56,120,109,1)]',
        text: 'text-white'
      };
    }
    return {
      background: 'bg-[rgba(255,246,242,1)]',
      text: 'text-[13px]'
    };
  };

  const badgeStyles = getBadgeStyles();

  return (
    <article className="w-full text-black max-md:max-w-full">
      <div className="bg-[rgba(236,242,241,1)] flex min-h-[222px] w-full flex-col items-stretch justify-center px-[31px] py-[35px] rounded-[11px_11px_0px_0px] max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[403px]">
          <blockquote className={`${getQuoteTextSize()} font-semibold`}>
            {quote}
          </blockquote>
          <div className="flex w-full items-center gap-[40px_97px] text-sm font-normal leading-[22px] mt-[27px]">
            <div className="self-stretch flex gap-3.5 my-auto">
              <img
                src={authorImage}
                alt={`${authorName} profile`}
                className="aspect-[1] object-contain w-[47px] shrink-0 rounded-[48px]"
              />
              <div>
                <span style={{fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 600, fontSize: '13px', lineHeight: '19px'}}>
                  {authorName}
                </span>
                <br />
                <span style={{fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif', fontSize: '11px', lineHeight: '20px', color: 'rgba(0,0,0,1)'}}>
                  {authorTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full text-[13px] ${badgeStyles.text} font-semibold text-center uppercase tracking-[0.52px] rounded-[0px_0px_0px_0px] max-md:max-w-full`}>
        <div className={`${badgeStyles.background} flex min-h-[47px] items-center gap-2.5 justify-center px-[11px] py-[15px] rounded-[0px_0px_4px_4px]`}>
          <div className="self-stretch my-auto">
            {badgeText}
          </div>
        </div>
      </div>
    </article>
  );
};
