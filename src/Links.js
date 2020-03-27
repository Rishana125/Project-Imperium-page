import React from 'react';
import {Button, Tab, Tabs, ButtonGroup} from 'react-bootstrap';

const Links = () => {
    const project = [
        {text: 'GitLab repository', link: 'https://gitlab.com/takaiten/project-imperium'},
        {text: 'Presentation: Intro', link: 'https://docs.google.com/presentation/d/12FUVSExC5QGYozxge5DMy_sBHt-ezpqJ8HelOCKu2-I/edit#slide=id.p'},
        {text: 'Presentation: Project Overview', link: 'https://docs.google.com/presentation/d/1Bch2eglbFGgzGdE3zWrK4gw7veFn5dM6kJ1MDqG6BGM/edit#slide=id.p'},
        {text: 'Presentation: Dodge System', link: 'https://docs.google.com/presentation/d/1gxk672klfgfF_u5oN3kOLM8AQsau1dO6FtguCN016R4/edit#slide=id.p'}
    ];

    const developers = [
        {text: 'takaiten', link: 'https://github.com/takaiten'},
        {text: 'Rishana', link: 'https://github.com/Rishana125'},
        {text: 'Hexet', link: 'https://github.com/Hexet'},
        {text: 'MariSarco', link: 'https://github.com/MariSarco'},
        {text: 'ijustride', link: 'https://github.com/ijustride'}
    ];

    const materials = [
        {text: 'Unreal Engine 4', link: 'https://www.unrealengine.com/en-US/'},
        {text: 'Adobe Mixamo', link: 'https://www.mixamo.com/#/'},
        {text:'Cascadeur', link: 'https://cascadeur.com/'}
    ];

    const themes = [
        'outline-danger',
        'outline-info',
        'outline-success',
        'outline-warning',
        'outline-light'
    ];

    const tabs = [
        {key: 'project', container: project},
        {key: 'developers', container: developers},
        {key: 'materials', container: materials}
    ];

    return (
        <div className="mt-3 ml-3 mr-3" id="links">
            <h3>Links</h3>
            <Tabs defaultActiveKey="project" id="uncontrolled-tab-example">
                {tabs.map(tab =>
                    <Tab eventKey={tab.key} title={window.capitalize(tab.key)}>
                        <ButtonGroup className="mt-3">
                            {tab.container.map((key, index) =>
                                <Button
                                    href={key.link}
                                    variant={themes[index]}>
                                    {key.text}
                                </Button>
                            )}
                        </ButtonGroup>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
};

export default Links;