// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  // Renders the home page view
  public async index({ view }: HttpContextContract) {
    return view.render('index')
  }
}
