import type { ModuleContent } from '../../utils/utils';

export default function Card({ image, title, module }: Omit<ModuleContent, 'content'>) {
    return (
        <div className="card">
            <img src={ image } alt={ `Module ${ module } image` } />
            <h1>{ `Module ${ module }` }</h1>
            <p>{ title }</p>
        </div>
    )
}