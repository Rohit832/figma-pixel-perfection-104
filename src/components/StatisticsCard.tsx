import React from 'react';

interface StatisticsCardProps {
  backgroundImage: string;
  statNumber: string;
  statDescription: string;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  backgroundImage,
  statNumber,
  statDescription
}) => {
  return (
    <div className="flex flex-col relative min-h-[551px] min-w-60 text-2xl text-[rgba(53,115,105,1)] font-semibold text-center leading-[31px] grow shrink w-[373px] pt-[378px] pb-7 px-[21px] rounded-[29px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative bg-white flex min-h-[145px] w-[209px] max-w-full flex-col items-center justify-center px-[18px] py-[26px] rounded-2xl">
        <div className="w-full">
          <div>
            <span style={{fontWeight: 800, fontSize: '29px', color: 'rgba(53,115,105,1)'}}>
              {statNumber}
            </span>{" "}
            <br />
            <span style={{fontSize: '17px', color: 'rgba(53,115,105,1)'}}>
              {statDescription}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
