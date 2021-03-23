import React, {useState, Suspense} from "react"
import { selectorFamily, useRecoilValue, RecoilRoot } from 'recoil'

const bookQuery = (bookId) => {
    // Simulated async call to a service
    console.log("In bookQuery with ID", bookId)
    const books = [
        { id: '1', name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', released: '1925' },
        { id: '2', name: 'Moby Dick', author: 'Herman Melville', released: '1851' },
        { id: '3', name: 'Ward and Peace', author: 'Leo Tolstoy', released: '1869' },
    ]
    const book = books.filter((b) => b.id === bookId)[0]
    return new Promise(resolve => setTimeout(resolve, 1000, book))
}

const bookSelectorFamily = selectorFamily({
    key: 'books',
    get: bookId => async () => {
        const response = await bookQuery(bookId)
        return response
    }
})

function BookInfo({bookId}) {
    const book = useRecoilValue(bookSelectorFamily(bookId))
    return (
        <h4>{bookId} - Name: {book.name}, Author: {book.author}, Released: {book.released}</h4>
    )
}

export default function RecoilAsyncSelectorFamilyDemo() {
    const [selectedBookId, setSelectedBookId] = useState()
    return (
        <RecoilRoot>
            <h2>Recoil async selector Family (query w/params)</h2>
            SELECT BOOK: <button onClick={() => setSelectedBookId('1')}>Book 1</button>
            <button onClick={() => setSelectedBookId('2')}>Book 2</button>
            <button onClick={() => setSelectedBookId('3')}>Book 3</button><br/><br/>
            <Suspense fallback={<div>Loading...</div>}>
                {selectedBookId && <BookInfo bookId={selectedBookId} />}
            </Suspense>
        </RecoilRoot>
    )
}