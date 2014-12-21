<!DOCTYPE html>
<html lang="en">
  <head>
    <title>
      {% for page in breadCrumbs %}
        {{ page.title }}
        {% if not loop.last %}
        &nbsp;>&nbsp;
        {% endif %}
      {% endfor %}
    </title>

    <script src="/js/jquery.min.js"></script>

    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <script src="/js/bootstrap.min.js"></script>

    <link href="/css/main.css" rel="stylesheet">

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

  </head>
  <body>

    {% include "./navbar.tpl" %}
    <div class="container">
      <div class="row">
        <div class="page-header">
          <h1>Applications</h1>
        </div>
      </div>
    </div>

  </body>
</html>
