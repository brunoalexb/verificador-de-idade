function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anoNasc')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = Number(ano) - Number(fano.value)
        res.innerHTML = ('Idade calculada: ' + idade)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if ( idade >= 0 && idade < 5) {
                img.setAttribute('src', 'bebe_homem.png') // bebe
            } else if (idade < 15) {
                img.setAttribute('src', 'hcriança.png') // criança
            } else if (idade < 30) {
                img.setAttribute('src', 'hjovem.png') // jovem
            } else if (idade < 59) {
                img.setAttribute('src', 'homem_adulto.png') // adulto
            } else {
            img.setAttribute('src', 'hidoso.png') // idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if ( idade >= 0 && idade < 5) {
                img.setAttribute('src', 'bebe_mulher.png')
            } else if (idade < 15) {
                img.setAttribute('src', 'mcriança.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'mjovem.png')
            } else if (idade < 59) {
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
            img.setAttribute('src', 'midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ('Detectamos ' + gênero + ' com ' + idade + ' anos.')
        res.appendChild(img)
    } 
}