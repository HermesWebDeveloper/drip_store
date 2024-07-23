export default function Widget() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-primary">Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <div className="flex mt-4">
                <img src="https://placehold.co/400x400" alt="Nike Revolution 6" className="w-1/2 rounded-lg shadow-lg" />
                <div className="ml-6 w-1/2">
                    <div className="flex items-center">
                        <span className="text-yellow-500">★★★★☆</span>
                        <span className="text-muted-foreground ml-2">(90 avaliações)</span>
                    </div>
                    <p className="text-2xl font-semibold mt-2">R$ 219,00 <span className="line-through text-muted">R$ 210,00</span></p>
                    <p className="mt-4 text-muted-foreground">Descrição do produto: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="mt-4">
                        <span className="font-semibold">Tamanho:</span>
                        <div className="flex space-x-2 mt-2">
                            <button className="border rounded-lg p-2">39</button>
                            <button className="border rounded-lg p-2">40</button>
                            <button className="border rounded-lg p-2 bg-primary text-primary-foreground">41</button>
                            <button className="border rounded-lg p-2">42</button>
                            <button className="border rounded-lg p-2">43</button>
                        </div>
                    </div>
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-4 py-2 px-4 rounded-lg">COMPRAR</button>
                </div>
            </div>
        <h2 className="text-xl font-bold mt-8">Produtos Relacionados</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="border rounded-lg p-4">
                <span className="bg-red-500 text-white p-1 rounded">30% OFF</span>
                <img src="https://placehold.co/200x200" alt="K-Swiss V8" className="w-full mt-2" />
                <p className="font-semibold">K-Swiss V8 - Masculino</p>
                <p className="line-through text-muted">$200</p>
                <p className="font-bold">$100</p>
            </div>
            <div className="border rounded-lg p-4">
                <span className="bg-red-500 text-white p-1 rounded">30% OFF</span>
                <img src="https://placehold.co/200x200" alt="K-Swiss V8" className="w-full mt-2" />
                <p className="font-semibold">K-Swiss V8 - Masculino</p>
                <p className="line-through text-muted">$200</p>
                <p className="font-bold">$100</p>
            </div>
            <div className="border rounded-lg p-4">
                <span className="bg-red-500 text-white p-1 rounded">30% OFF</span>
                <img src="https://placehold.co/200x200" alt="K-Swiss V8" className="w-full mt-2" />
                <p className="font-semibold">K-Swiss V8 - Masculino</p>
                <p className="line-through text-muted">$200</p>
                <p className="font-bold">$100</p>
            </div>
        </div>
        
        <footer className="mt-8">
            <div className="text-center text-muted-foreground">
                <p>© 2022 Digital College</p>
            </div>
        </footer>
        </div>
    )
}