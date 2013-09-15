#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
#set( $prefix=$className.toLowerCase())
package ${package}.web.controller;

import ${package}.model.${className};
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentSkipListMap;
import java.util.concurrent.atomic.AtomicLong;

/**
 * @author Olivier Croisier
 */
@Controller
public class ${className}Controller {

    private static final AtomicLong ${prefix}IdGenerator = new AtomicLong(0);
    private static final ConcurrentSkipListMap<Long, ${className}> ${prefix}Repository = new ConcurrentSkipListMap<Long, ${className}>();

    @RequestMapping(value = "/${prefix}", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody List<${className}> list() {
        return new ArrayList<${className}>(${prefix}Repository.values());
    }

    @RequestMapping(value = "/${prefix}/{id}", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody ${className} getById(@PathVariable long id) {
        return ${prefix}Repository.get(id);
    }

    @RequestMapping(value = "/${prefix}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void create(@RequestBody ${className} ${prefix}) {
        long id = ${prefix}IdGenerator.incrementAndGet();
        ${prefix}.setId(id);
        ${prefix}Repository.put(id, ${prefix});
    }

    @RequestMapping(value = "/${prefix}/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id) {
        ${prefix}Repository.remove(id);
    }

}
