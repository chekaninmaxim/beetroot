import React, {useState} from 'react'
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { mapToArr} from "../../utils"
import {Redirect} from 'react-router-dom'
import {addBookAction, editBookAction} from '../../ac/booksAction'

const BookForm = ({book, categories, bookAction}) => {
    const [redirect, setRedirect] = useState(false)
    const { register, handleSubmit, errors, control, setError, getValues } = useForm({
        defaultValues: {
            title: book.title,
            desc: book.desc,
        }
    });

    const options = [{value: '-1', label: 'Choose category'}]
    categories.map(cat => options.push({value: cat._id, label: cat.title}))

    function onSubmit(data, e) {
        e.preventDefault()

        if (errors.categoryId) {
            setError("categoryId", {
                message: "No choosen category!",
                type: "manual",
                shouldFocus: true
            });
            return
        }

        data = {...data, categoryId: data.categoryId.value, _id : book._id}

        bookAction(data)
        setRedirect(true)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-5">
            {redirect && <Redirect to={'/'} />}
            <div className="form-group">
                <label html-for="title">Title</label>
                <input
                    name="title"
                    id="title"
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                />
                {errors.title && "Title is required."}
            </div>
            <div className="form-group">
                <label html-for="desc">Description</label>
                <textarea
                    name="desc"
                    id="title"
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                />
                {errors.desc && "Description  is required."}
            </div>
            <Controller
                as={<Select options={options}/>}
                control={control}
                inputRef={register({ required: true})}
                onChange={([selected]) => selected }
                name={'categoryId'}
                defaultValue={options.find(option => option.value === book.categoryId)}
            />
            {errors.categoryId && 'Categories  is required.'}

            <div className="form-group">
                <button
                    onClick={() => {
                        const { categoryId } = getValues();

                        if (categoryId.value === '-1') {
                            setError('categoryId', {
                                message: 'No choosen category'
                            })
                        }
                    }}
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

const defaultBook = {_id: "-1", title: "", desc: "", categoryId: "-1"}

function mapStateToProps(state, ownProps) {
    const {bookId} = ownProps; 
    const {categories} = state.categoriesBooks

    return {
        categories: mapToArr(categories),
        book: bookId ? state.books.find(book => book._id === bookId) : defaultBook
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const { bookId } = ownProps;

    const bookAction = bookId ? editBookAction : addBookAction
    return {
        bookAction: (book) => dispatch(bookAction(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)
