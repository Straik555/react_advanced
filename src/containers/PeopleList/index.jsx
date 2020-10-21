import React from "react";
import {connect} from 'react-redux';

import UserItem from "../../components/UserItem";
import PeopleSearch from '../../components/PeopleSearch'

const PeopleList = ({people}) => {
    return (
        <div className="people-list" id="people-list">
            <PeopleSearch />
            <ul className="list">
                {
                    people.map(({id, userName}) =>
                        <UserItem
                            user={userName}
                            key={id}
                        />
                    )
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({people}) => {
    return {people}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);