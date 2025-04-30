/* EXPLAINING A TRIGGER*/


-- Delimiter ↓ allow SQL to understand that a block comming up is wide, and that will use the // to finish the sentence
-- In this case, the block lasts until the line 'END //'. 
DELIMITER //


CREATE TRIGGER tg_save_place
	-- AFTER / BEFORE and we also have to place the process statement such as INSERT / UPDATE / DELETE
    BEFORE UPDATE on bikes
    FOR EACH ROW
    -- With begin we start the block in which our trigger logic will stand
    BEGIN
		-- ↓ OLD and NEW, are used to work as a callback in programming, which will allow us to acces
		-- the data during or process
		IF OLD.current_location != NEW.current_location THEN
			INSERT INTO visited_places (city, bike_id)
            VALUES (OLD.current_location, OLD.id);
        END IF; -- ← end of conditional
    END//

DELIMITER ;