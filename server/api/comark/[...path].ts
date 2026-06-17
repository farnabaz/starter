import cms from '../../../cms'

export default eventHandler(async (event) => cms.serve(getRouterParam(event, 'path')!))
