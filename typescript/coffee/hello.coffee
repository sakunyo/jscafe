# CoffeeScript


class Animal
  constructor: (name)->

    @.name = name || @defaults.name
    return

  defaults: {
    name: "animal"
  }

  cry: (v)->
    return "#{@name} #{v}"




