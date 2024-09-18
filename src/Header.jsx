const Header = () => {

	return (
		<header className="sticky top-0 flex items-center bg-[url('../images/purpleBG.png')] bg-no-repeat bg-[0%_30%] bg-cover h-[15svh] w-screen z-[999] shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
			<h2 
        className="relative text-[#e2dfd2] font-yellowtail font-normal font-thin text-7xl px-[max(2%,20px)]"> La Galleria </h2>
      <div 
  className="flex-grow h-[2px] bg-[#e2dfd2]"></div>
		</header>
	) 
};

export default Header;
