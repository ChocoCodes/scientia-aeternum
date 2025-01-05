import type { ModuleContent } from '../../utils/utils';
export default function Card(content: ModuleContent) {
    return (
        <div className="card">
            <img src={ content.image } alt={ `Module ${ content.module } image` } />
            <h1>{ content.title }</h1>
            <p>{ content.content }</p>
        </div>
    )
}