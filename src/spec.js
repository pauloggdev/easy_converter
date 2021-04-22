(function(){
    var results;
    var cssSuccess = 'color: #006400';
    var cssFail = 'color: #dc143c; text-decoration: line-through;';
    var cssBox = 'border: 3px solid maroon; background-color: #ffffcc; padding: 0.25em 1.5em; margin-left: 0;';

    _setBoxStyle();

    function _createResultList(){
        results = document.createElement('ul');
        document.getElementsByTagName('body')[0].appendChild(results);
        results.setAttribute('id', 'results');
        _setBoxStyle();
        return results;
    }
    function _setBoxStyle(){
        if(results){
            results.setAttribute('style', cssBox);
        }
    }
    function assert(value, desc){
        if (!results) _createResultList();
        var li = document.createElement('li');
        li.className = value ? 'pass' : 'fail';
        li.setAttribute('style', value ? cssSuccess : cssFail);
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.className = 'fail';
        }
        return li;
    }

    assert.describe = function(name, fn) {
        results = document.getElementById('results') || _createResultList();
        results = assert(true, name).appendChild(document.createElement('ul'));
        fn();
    };

    assert.config = function(obj){
        cssSuccess = obj.success || cssSuccess;
        cssFail = obj.fail || cssFail;
        cssBox = obj.box || cssBox;
    };

    window.assert = assert;
})();