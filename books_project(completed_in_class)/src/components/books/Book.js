import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {selectBook} from '../../ac'

const Book = ({book, isActive, toggle, category}) => (
    <li className={'list-group-item'}>
        <div className="row">
            <div className="col-sm-10">
                <h2 onClick={toggle}>{book.title}</h2>
            </div>
            <div className="col-sm-2">
                <Link
                    to={`edit-book/${book._id}`}
                    className="btn btn-info float-right"
                >
                    EDIT
                </Link>
            </div>
        </div>
        <p>Category: {category.title}</p>
        {isActive && <p>{book.desc}</p>}
    </li>
)

Book.propTypes = {
    book: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        categoryId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }),
    isActive: PropTypes.bool,
    category: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
    const {categories} = state.categoriesBooks;

    return {
        isActive: state.activeBook === ownProps.book._id,
        category: categories[ownProps.book.categoryId],
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggle: () => dispatch(selectBook(ownProps.book._id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
