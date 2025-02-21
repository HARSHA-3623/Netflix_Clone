function Moviecard({ poster, title }) {
    return (
        <div className="w-full h-full">
            <img 
                className="w-full h-full sm:h-[180px] md:h-[200px] lg:h-[250px] xl:h-[300px] 
                          object-cover rounded-lg shadow-lg transition-transform duration-300"
                src={poster} 
                alt={title}
                loading="lazy"
            />
        </div>
    );
}

export default Moviecard;
