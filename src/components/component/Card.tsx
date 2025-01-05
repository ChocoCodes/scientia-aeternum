import type { ModuleContent } from '../../utils/utils';
import { Link } from 'react-router-dom';

export default function Card({ image, title, module }: Omit<ModuleContent, 'content'>) {
    return (
        <div className="card">
            <Link to={ `/module/${ module }` }>
                <img src={ image } alt={ `Module ${ module } image` } />
                <h1>{ module == 6 ? `Reflection` : `Module ${ module }` }</h1>
                <p>{ title }</p>
            </Link>
        </div>
    )
}