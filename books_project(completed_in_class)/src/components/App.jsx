import React from "react"
import { Route } from 'react-router-dom'
import Menu from './Menu'
import { AsyncLoad, lazyLoad } from './AsyncLoad'

const BooksPage = AsyncLoad(lazyLoad('./books/BooksPage'))
const BookForm = AsyncLoad(lazyLoad('./books/BookForm'))

const App = () => <div className="container">
    <div className={'container'}>
        <Menu />
        <div className={'row'}>
            <Route exact path='/' component={BooksPage}/>
            <Route path='/add-book' component={BookForm} />
            <Route
                path='/edit-book/:id'
                render={(props) => <BookForm bookId = {props.match.params.id}/>}
            />
        </div>
    </div>
</div>

export default App
