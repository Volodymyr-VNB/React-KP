import Header from 'Container/Header/Header'
import Main from 'Container/Main/Main'
import About from 'Pages/About/About'
import ArticlePost from 'Pages/ArticlePost/ArticlePost'
import BrowseCategory from 'Pages/BrowseCategory/BrowseCategory'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import articleArray from 'utils/articleBlog'
import Favorites from 'Pages/Favorites/Favorites'

type Context = {
    keyIdpr: number
    changKeyId: (id: number) => void
    countAll: number
}

export const AppContext = createContext<Context | null>(null)

type Props = {}
const App = (props: Props) => {
    let useDefault = 15 || 0
    const [keyId, setKeyId] = useState(useDefault)

    let countAll = articleArray.length

    const changKeyId = (id: number) => {
        setKeyId(() => id)
    }

    return (
        <AppContext.Provider
            value={{
                keyIdpr: keyId,
                changKeyId: changKeyId,
                countAll: countAll,
            }}
        >
            <Header />

            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ScrollToTop /> <Main />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <ScrollToTop />
                                <About />
                            </>
                        }
                    />
                    <Route
                        path="/browseCategory"
                        element={
                            <>
                                <ScrollToTop />
                                <BrowseCategory categogiyBrow="Travel" />
                            </>
                        }
                    />
                    <Route
                        path="/mobile"
                        element={
                            <>
                                <ScrollToTop />
                                <BrowseCategory categogiyBrow="Mobile" />
                            </>
                        }
                    />
                    <Route
                        path="/digital"
                        element={
                            <>
                                <ScrollToTop />
                                <BrowseCategory categogiyBrow="Digital" />
                            </>
                        }
                    />
                    <Route
                        path="/gadget"
                        element={
                            <>
                                <ScrollToTop />
                                <BrowseCategory categogiyBrow="Gadget" />
                            </>
                        }
                    />
                    <Route
                        path="/lifestyle"
                        element={
                            <>
                                <ScrollToTop />
                                <BrowseCategory categogiyBrow="Lifestyle" />
                            </>
                        }
                    />
                    <Route
                        path="/fashion"
                        element={
                            <>
                                <ScrollToTop />
                                <BrowseCategory categogiyBrow="Fashion" />
                            </>
                        }
                    />
                    <Route
                        path="/entertainment"
                        element={
                            <>
                                <ScrollToTop />
                                <BrowseCategory categogiyBrow="Entertainment" />
                            </>
                        }
                    />
                    <Route
                        path="/techNews"
                        element={
                            <>
                                <ScrollToTop />
                                <BrowseCategory categogiyBrow="Tech News" />
                            </>
                        }
                    />
                    <Route
                        path="/articlePost"
                        element={
                            <>
                                <ScrollToTop />
                                <ArticlePost />
                            </>
                        }
                    />
                    <Route
                        path="/articlePost/:id"
                        element={
                            <>
                                <ScrollToTop />
                                <ArticlePost />
                            </>
                        }
                    />
                    <Route
                        path="/favorites"
                        element={
                            <>
                                <ScrollToTop />
                                <Favorites id={keyId} />
                            </>
                        }
                    />
                </Routes>
            </div>
        </AppContext.Provider>
    )
}
export default App
