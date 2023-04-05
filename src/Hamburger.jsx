function Hamburger({ isOpen }){
    return(
    <>
        <div className="ham">
            <div id="hambar1" />
            <div id="hambar2" />
            <div id="hambar3" />
        </div>
        <style jsx>{`
            #hambar1{
                transform: ${ isOpen ? 'rotate(45deg) translate(0, 11.5px)' : 'rotate(0)'};
            }
            #hambar2{
                opacity: ${ isOpen ? 0 : 1};
            }
            #hambar3{
                transform: ${ isOpen ? 'rotate(-45deg) translate(0, -11.5px)' : 'rotate(0)'};
            }
            
    `}</style>
    </>
    );
}

export default Hamburger