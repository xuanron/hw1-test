import ProductList from './ProductList'
export default function Content() {
    return (
        <div>
            <article className="image__layout py-3 py-sm-5">
                <div className="container">
                    <h1 className="text-center">IMAGES</h1>
                    <hr className="divider--dark" />
                    <ProductList />
                </div>
            </article>
            
            <article className="description__layout py-4 py-sm-5">
                <div className="container d-flex flex-column align-items-center">
                    <h1>DESCRIPTIONS</h1>
                    <hr className="divider--light" />
                    <p className="text-justify description__content py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                        corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                        unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                        ullam
                        eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                        quod
                        quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                        dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                        tempora.
                        Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                        repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
                </div>
            </article>
        </div>
    );
}