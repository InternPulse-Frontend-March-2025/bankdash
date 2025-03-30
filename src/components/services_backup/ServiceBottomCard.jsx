import ServicesCardLine from "./ServicesCardLine"

function ServiceBottomCard() {

  const serviceLines = [
    {
      iconDescription: 'loans',
      bgColorClass: 'bg-pink-200',
      textColorClass: 'text-pink-700',
      title1: 'Business loans',
      subtitle1: 'It is long established',
      title2: 'Lorem Ipsum',
      subtitle2: 'Many publishing',
      title3: 'Lorem Ipsum',
      subtitle3: 'Many publishing',
      title4: 'Lorem Ipsum',
      subtitle4: 'Many publishing'
    },
    {
      iconDescription: 'accounts',
      bgColorClass: 'bg-yellow-100',
      textColorClass: 'text-yellow-500',
      title1: 'Checking accounts',
      subtitle1: 'It is long established',
      title2: 'Lorem Ipsum',
      subtitle2: 'Many publishing',
      title3: 'Lorem Ipsum',
      subtitle3: 'Many publishing',
      title4: 'Lorem Ipsum',
      subtitle4: 'Many publishing'
    },
    {
      iconDescription: 'savings',
      bgColorClass: 'bg-pink-200',
      textColorClass: 'text-pink-600',
      title1: 'Savings accounts',
      subtitle1: 'It is long established',
      title2: 'Lorem Ipsum',
      subtitle2: 'Many publishing',
      title3: 'Lorem Ipsum',
      subtitle3: 'Many publishing',
      title4: 'Lorem Ipsum',
      subtitle4: 'Many publishing'
    },
    {
      iconDescription: 'person',
      bgColorClass: 'bg-blue-100',
      textColorClass: 'text-blue-700',
      title1: 'Debit/Credit cards',
      subtitle1: 'It is long established',
      title2: 'Lorem Ipsum',
      subtitle2: 'Many publishing',
      title3: 'Lorem Ipsum',
      subtitle3: 'Many publishing',
      title4: 'Lorem Ipsum',
      subtitle4: 'Many publishing'
    },
    {
      iconDescription: 'safety',
      bgColorClass: 'bg-teal-100',
      textColorClass: 'text-teal-500',
      title1: 'Life Insurance',
      subtitle1: 'It is long established',
      title2: 'Lorem Ipsum',
      subtitle2: 'Many publishing',
      title3: 'Lorem Ipsum',
      subtitle3: 'Many publishing',
      title4: 'Lorem Ipsum',
      subtitle4: 'Many publishing'
    },
  ]

  return (
    <div>
      <h1 className="m-5 font-semibold text-2xl md:text-3xl text-indigo-800">Bank Services List</h1>

      <div className="banking-services mx-1 sm:mx-4 min-h-svh flex flex-col gap-4">
        {serviceLines.map((serviceLine) => (
          <ServicesCardLine {...serviceLine} />
        ))}
      </div>
    </div>
  );
}

export default ServiceBottomCard