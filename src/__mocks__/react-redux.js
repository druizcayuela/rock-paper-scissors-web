const mockDispatch = jest.fn()
const mockSelector = jest.fn()
 
// it has to be here because: https://github.com/facebook/create-react-app/issues/7539

const mockState = (state = {}) => {
    return mockSelector.mockImplementationOnce(callback => {
        return callback(state);
    })
}
 
module.exports = {
    ...jest.requireActual('react-redux'),
    __esModule: true,
    useSelector: mockSelector ,
    useDispatch: () => mockDispatch,
    mockDispatch,
    mockState
};