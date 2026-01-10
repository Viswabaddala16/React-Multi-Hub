const About = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {['Mission', 'Vision', 'Values'].map((item) => (
            <div key={item} className="p-6 bg-white shadow-md rounded-xl border-t-4 border-red-500">
                <h3 className="font-bold text-xl mb-2">{item}</h3>
                <p className="text-gray-500 text-sm">Providing the best quality service for our users in 2026.</p>
            </div>
        ))}
    </div>
);

export default About;
