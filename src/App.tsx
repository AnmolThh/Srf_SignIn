import Card from "./components/Card.tsx";
const App = () => {
  const cardInfo = [
    {
      title: "Let Crypto Earn for You",
      subtitle:
        "Let you assets work for you through stairing and yield farming",
    },
    {
      title: "Effortless Token Swipes in Seconds",
      subtitle: "Exchange token instantly with low fees and zero hastle",
    },
    {
      title: "Web3 Acces You Can Trust",
      subtitle: "Seamless access to apps with secure wallet services",
    },
  ];
  return (
    <>
      <div className="h-screen w-screen bg-background flex items-center justify-center gap-3">
        {cardInfo.map((item, index) => (
          <Card key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </>
  );
};

export default App;
